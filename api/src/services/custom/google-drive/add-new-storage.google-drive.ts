import {
  AddNewGoogleDriveStorageResult,
  AddNewGoogleDriveStorageInput,
} from 'api/types/graphql'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

//Todo: Migrate common interfaces to types folder
interface AddNewGoogleDriveContext {
  input: AddNewGoogleDriveStorageInput
}

export const addNewGoogleDriveStorage = async ({
  input,
}: AddNewGoogleDriveContext): Promise<AddNewGoogleDriveStorageResult> => {
  const { currentUser } = context
  const { credentialId, name } = input

  /** Find credential in db */
  const credentialInDb = await db.credential.findUnique({
    where: {
      id: credentialId,
    },
    rejectOnNotFound: true,
    select: {
      id: true,
    },
  })

  logger.info({ custom: { credentialInDb } }, `Found credential`)

  const storage = await db.storage.create({
    data: {
      name,
      provider: 'GOOGLE_DRIVE', //TODO: Maybe make dynamic?
      user: {
        connect: {
          supabaseId: currentUser.sub,
        },
      },
      credential: {
        connect: {
          id: credentialInDb.id,
        },
      },
    },
    select: {
      id: true,
    },
  })

  logger.info(
    { custom: { storage } },
    `Successfully Created storage for ${currentUser.email}`
  )

  return {
    storageId: storage.id,
  }
}
