import {
  GetGoogleDriveStorageInput,
  GetGoogleDriveStorageResult,
} from 'api/types/graphql'
import { db } from 'src/lib/db'
import { decrypt } from 'src/lib/crypto'
import { ForbiddenError } from '@redwoodjs/graphql-server'
import { authClient } from 'src/lib/google'
import { google } from 'googleapis'

interface GetGoogleDriveStorageContext {
  input: GetGoogleDriveStorageInput
}

export const getGoogleDriveStorage = async ({
  input,
}: GetGoogleDriveStorageContext): Promise<GetGoogleDriveStorageResult[]> => {
  const { storageId } = input
  const { currentUser } = context

  const { credential, user } = await db.storage.findUnique({
    where: {
      id: storageId,
    },
    include: {
      credential: {
        select: {
          accessToken: true,
          refreshToken: true,
        },
      },
      user: {
        select: {
          supabaseId: true,
        },
      },
    },
    rejectOnNotFound: true,
  })

  if (user.supabaseId !== currentUser.sub) {
    throw new ForbiddenError('You do not have permission to view this storage')
  }

  const decrypted = {
    accessToken: decrypt(credential.accessToken),
    refreshToken: decrypt(credential.refreshToken),
  }

  authClient.setCredentials({
    access_token: decrypted.accessToken,
    refresh_token: decrypted.refreshToken,
  })

  const drive = google.drive({ version: 'v3', auth: authClient })

  const { data } = await drive.files.list({
    pageSize: 100,
    orderBy: 'modifiedTime desc',
    q: `mimeType != 'application/vnd.google-apps.folder'`,
  })

  return data.files
}
