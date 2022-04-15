import { useQuery } from '@redwoodjs/web'

const GET_GOOGLE_DRIVE_AUTH_URL = gql`
  query getGoogleDriveAuthUrl {
    getGoogleDriveAuthUrl
  }
`

const useGoogleDriveAuthURL = () => {
  const { data } = useQuery(GET_GOOGLE_DRIVE_AUTH_URL)

  return data
}

export default useGoogleDriveAuthURL
