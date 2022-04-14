import { google } from 'googleapis'
import { WebSession } from 'src/common'

export const googleDriveFiles = async ({ session }: WebSession) => {
  const { provider_token } = session

  const oauth2 = new google.auth.OAuth2(
    process.env.GOOGLE_OAUTH2_CLIENT_ID,
    process.env.GOOGLE_OAUTH2_CLIENT_SECRET,
    process.env.GOOGLE_OAUTH2_REDIRECT_URL
  )

  oauth2.setCredentials({
    access_token: provider_token,
  })

  const drive = google.drive({ version: 'v3', auth: oauth2 })
  // TODO: Pagination for Google drive files
  const { data } = await drive.files.list()

  return data.files
}
