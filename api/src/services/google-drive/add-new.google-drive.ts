import {
  AddNewGoogleDriveInput,
  AddNewGoogleDriveResult,
} from 'api/types/graphql'

import { authClient } from 'src/lib/google'
import { logger } from 'src/lib/logger'
import { db } from 'src/lib/db'

interface AddNewGoogleDriveContext {
  input: AddNewGoogleDriveInput
}

export const addNewGoogleDrive = async ({
  input,
}: AddNewGoogleDriveContext): Promise<AddNewGoogleDriveResult> => {
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
    const credential = await db.credential.create({
      data: {
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
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
      message,
    }
  } catch (err) {
    logger.error(err)
    throw new Error()
  }
}
