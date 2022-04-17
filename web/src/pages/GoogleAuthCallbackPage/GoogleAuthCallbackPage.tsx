import StoragePage from 'src/pages/StoragePage'
import useDevelopment from 'src/hooks/useDevelopment'
import { navigate, routes, useParams } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

const ADD_NEW_GOOGLE_DRIVE = gql`
  mutation AddNewGoogleDriveCredentialMutation(
    $input: AddNewGoogleDriveCredentialInput!
  ) {
    addNewGoogleDriveCredential(input: $input) {
      id
    }
  }
`

const opts = {
  onError: () => navigate(routes.storage()),
}

const GoogleAuthCallbackPage = () => {
  const { code } = useParams()
  const [add] = useMutation(ADD_NEW_GOOGLE_DRIVE, { opts })
  const { log } = useDevelopment()

  React.useEffect(() => {
    if (!code) navigate(routes.storage())
    add({ variables: { input: { code } } })
    log({ code })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code])

  return <StoragePage />
}

export default GoogleAuthCallbackPage
