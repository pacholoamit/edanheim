import { authClient } from 'src/lib/google'

export const getGoogleDriveAuthUrl = () => {
  const authUrl = authClient.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/drive'],
  })

  return authUrl
}
