import { logdev } from 'src/utils'
import { useMutation } from '@redwoodjs/web'
import { AddNewGoogleDriveCredentialMutation } from 'web/types/graphql'
import { ApolloError } from '@apollo/client'

const ADD_NEW_GOOGLE_DRIVE_CREDENTIAL = gql`
  mutation AddNewGoogleDriveCredentialMutation(
    $input: AddNewGoogleDriveCredentialInput!
  ) {
    addNewGoogleDriveCredential(input: $input) {
      credentialId
    }
  }
`
interface useAddNewGoogleDriveCredentialHookOptions {
  onError: (error: ApolloError) => void
}

const useAddNewGoogleDriveCredential = (
  code: string,
  { onError }: useAddNewGoogleDriveCredentialHookOptions
) => {
  const [crededentialId, setCredentialId] = React.useState<string>('')
  const [addCredential, { loading }] =
    useMutation<AddNewGoogleDriveCredentialMutation>(
      ADD_NEW_GOOGLE_DRIVE_CREDENTIAL,
      {
        onError,
        onCompleted: (data) => {
          setCredentialId(data.addNewGoogleDriveCredential.credentialId)
          logdev(data)
        },
      }
    )

  return { addCredential, loading, crededentialId }
}

export default useAddNewGoogleDriveCredential
