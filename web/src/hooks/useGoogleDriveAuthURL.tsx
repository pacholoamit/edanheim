import { showNotification } from '@mantine/notifications'
import { useQuery } from '@redwoodjs/web'
import { getGoogleDriveAuthUrl } from 'web/types/graphql'

const GET_GOOGLE_DRIVE_AUTH_URL = gql`
  query getGoogleDriveAuthUrl {
    getGoogleDriveAuthUrl
  }
`

const useGoogleDriveAuthURL = () => {
  const { refetch } = useQuery<getGoogleDriveAuthUrl>(
    GET_GOOGLE_DRIVE_AUTH_URL,
    {
      onError: (error) =>
        showNotification({
          title: 'Oops! Something went wrong',
          message: error.message,
          color: 'red',
        }),
    }
  )

  return { refetch }
}

export default useGoogleDriveAuthURL
