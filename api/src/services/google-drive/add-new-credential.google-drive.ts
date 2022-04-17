import {
  AddNewGoogleDriveCredentialInput,
  AddNewGoogleDriveCredentialResult,
} from 'api/types/graphql'
import { authClient } from 'src/lib/google'
import { logger } from 'src/lib/logger'
import { db } from 'src/lib/db'
import { encrypt } from 'src/lib/crypto'
import { ForbiddenError } from '@redwoodjs/graphql-server'

interface AddNewGoogleDriveContext {
  input: AddNewGoogleDriveCredentialInput
}

export const addNewGoogleDriveCredential = async ({
  input,
}: AddNewGoogleDriveContext): Promise<AddNewGoogleDriveCredentialResult> => {
  const { code } = input
  const { currentUser } = context

  try {
    /**  Get token from code */
    const { tokens } = await authClient.getToken(code)
    logger.info({ custom: { tokens } })

    /** Find User record in db */
    const userInDb = await db.user.findUnique({
      where: {
        supabaseId: currentUser.sub,
      },
      select: {
        name: true,
        supabaseId: true,
      },
      rejectOnNotFound: true,
    })

    logger.info({ custom: { userInDb } }, `Found user ${userInDb.name}`)

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
      select: {
        id: true,
      },
    })
    logger.info(
      { custom: { credential } },
      `Created credential for ${userInDb.name}`
    )

    const message = `Successfully added Google drive credentials for ${currentUser.email} `
    logger.info(message)

    return {
      credentialId: credential.id,
    }
  } catch (err) {
    logger.error({ custom: { err } }, 'Error in addNewGoogleDrive mutation')
    throw new ForbiddenError('Unauthorized access')
  }
}
