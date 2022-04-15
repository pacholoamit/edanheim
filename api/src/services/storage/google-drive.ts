import { google } from 'googleapis'
import { WebSession } from 'src/common'
import { authClient } from 'src/lib/google'

export const googleDriveFiles = async ({ session }: WebSession) => {
  const { provider_token } = session

  authClient.setCredentials({
    access_token: provider_token,
  })

  const drive = google.drive({ version: 'v3', auth: authClient })
  // TODO: Pagination for Google drive files
  const { data } = await drive.files.list({
    pageSize: 10,
    orderBy: 'modifiedTime desc',
    q: `mimeType != 'application/vnd.google-apps.folder'`,
  })

  return data.files
}
