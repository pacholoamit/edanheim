import {
  AddNewGoogleDriveCredentialInput,
  AddNewGoogleDriveCredentialResult,
} from 'api/types/graphql'
import { authClient } from 'src/lib/google'
import { logger } from 'src/lib/logger'
import { db } from 'src/lib/db'
import { encrypt } from 'src/lib/crypto'

interface AddNewGoogleDriveContext {
  input: AddNewGoogleDriveCredentialInput
}

export const addNewGoogleDriveCredential = async ({
  input,
}: AddNewGoogleDriveContext): Promise<AddNewGoogleDriveCredentialResult> => {
  logger.info('Running addNewGoogleDrive mutation')
  const { code } = input
  const { currentUser } = context

  try {
    /**  Get token from code */
    const { tokens } = await authClient.getToken(code)
    logger.debug({ custom: { tokens } })

    /** Find User record in db */
    const userInDb = await db.user.findUnique({
      where: {
        supabaseId: currentUser.sub,
      },
      rejectOnNotFound: true,
    })

    logger.debug({ custom: { userInDb } }, `Found user ${userInDb.name}`)

    /** Create new credential then bind to user */
    // TODO: make upsert work then query by accessToken
    const credential = await db.credential.create({
      data: {
        accessToken: encrypt(tokens.access_token),
        refreshToken: encrypt(tokens.refresh_token),
        scope: tokens.scope,
        user: {
          connect: {
            supabaseId: userInDb.supabaseId,
          },
        },
      },
    })
    logger.debug(
      { custom: { credential } },
      `Created credential for ${userInDb.name}`
    )

    const message = `Successfully added Google drive credentials for ${currentUser.email} `
    logger.info(message)

    return {
      id: credential.id,
    }
  } catch (err) {
    logger.debug({ custom: { err } }, 'Error in addNewGoogleDrive mutation')
    throw new Error()
  }
}
