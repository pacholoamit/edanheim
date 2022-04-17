import StoragePage from 'src/pages/StoragePage'
import CreateStorageModal from 'src/pages/GoogleAuthCallbackPage/components/CreateStorageModal'
import { logdev } from 'src/utils'
import { navigate, routes, useParams } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { AddNewGoogleDriveCredentialMutation } from 'web/types/graphql'

const ADD_NEW_GOOGLE_DRIVE_CREDENTIAL = gql`
  mutation AddNewGoogleDriveCredentialMutation(
    $input: AddNewGoogleDriveCredentialInput!
  ) {
    addNewGoogleDriveCredential(input: $input) {
      credentialId
    }
  }
`

//TODO: Massive cleanup
const GoogleAuthCallbackPage = () => {
  const { code } = useParams()
  const [crededentialId, setCredentialId] = React.useState<string>('')

  const [addCredential, { loading }] =
    useMutation<AddNewGoogleDriveCredentialMutation>(
      ADD_NEW_GOOGLE_DRIVE_CREDENTIAL,
      {
        onError: () => navigate(routes.storage()),
        onCompleted: (data) => {
          setCredentialId(data.addNewGoogleDriveCredential.credentialId)
          logdev(data)
        },
      }
    )

  React.useEffect(() => {
    if (!code) navigate(routes.storage())
    addCredential({ variables: { input: { code } } })
    logdev({ code })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code])

  return (
    <>
      <CreateStorageModal credentialId={crededentialId} loading={loading} />
      <StoragePage />
    </>
  )
}

export default GoogleAuthCallbackPage
