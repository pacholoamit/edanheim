import { google } from 'googleapis'
import { logger } from 'src/lib/logger'
import { WebSession } from 'src/common'

export const getGoogleDrive = async ({ session }: WebSession) => {
  const { provider_token } = session

  try {
    const oauth2 = new google.auth.OAuth2(
      process.env.GOOGLE_OAUTH2_CLIENT_ID,
      process.env.GOOGLE_OAUTH2_CLIENT_SECRET,
      process.env.GOOGLE_OAUTH2_REDIRECT_URL
    )

    oauth2.setCredentials({
      access_token: provider_token,
    })

    const drive = google.drive({ version: 'v3', auth: oauth2 })
    const { data } = await drive.files.list()

    return {
      data,
    }
  } catch (err) {
    logger.error(err)
    return {
      data: {
        error: err.message,
      },
    }
  }
}
