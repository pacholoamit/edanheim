import { google } from 'googleapis'
import { logger } from 'src/lib/logger'

interface GetGoogleDriveArgs {
  providerToken: string
  refreshToken: string
}

export const getGoogleDrive = async ({
  providerToken,
  refreshToken,
}: GetGoogleDriveArgs) => {
  try {
    const oauth2 = new google.auth.OAuth2(
      process.env.GOOGLE_OAUTH2_CLIENT_ID,
      process.env.GOOGLE_OAUTH2_CLIENT_SECRET,
      process.env.GOOGLE_OAUTH2_REDIRECT_URL
    )

    oauth2.setCredentials({
      access_token: providerToken,
      token_type: 'Bearer',
      // refresh_token: refreshToken,
    })

    console.log(providerToken)
    const drive = google.drive({ version: 'v3', auth: oauth2 })
    const res = await drive.files.list({})

    return {
      data: {
        res,
      },
    }
  } catch (err) {
    logger.error(err)
    return {
      data: {
        err,
      },
    }
  }
}
