import { showNotification } from '@mantine/notifications'
// import { useQuery } from '@redwoodjs/web'
import { useLazyQuery, LazyQueryHookOptions } from '@apollo/client'
import { getGoogleDriveAuthUrl } from 'web/types/graphql'

const GET_GOOGLE_DRIVE_AUTH_URL = gql`
  query getGoogleDriveAuthUrl {
    getGoogleDriveAuthUrl
  }
`

const options: LazyQueryHookOptions = {
  onError: (error) =>
    showNotification({
      title: 'Oops! Something went wrong',
      message: error.message,
      color: 'red',
    }),
}

const useGoogleDriveAuthURL = () => {
  const [query, _] = useLazyQuery<getGoogleDriveAuthUrl>(
    GET_GOOGLE_DRIVE_AUTH_URL,
    options
  )

  return { query }
}

export default useGoogleDriveAuthURL
