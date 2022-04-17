import StoragePage from 'src/pages/StoragePage'
import { logdev } from 'src/utils'
import { navigate, routes, useParams } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { AddNewGoogleDriveCredentialMutation } from 'web/types/graphql'
import { Button, Checkbox, Modal, Stack, TextInput } from '@mantine/core'

const ADD_NEW_GOOGLE_DRIVE_CREDENTIAL = gql`
  mutation AddNewGoogleDriveCredentialMutation(
    $input: AddNewGoogleDriveCredentialInput!
  ) {
    addNewGoogleDriveCredential(input: $input) {
      id
    }
  }
`

const opts: GraphQLMutationHookOptions<
  AddNewGoogleDriveCredentialMutation,
  GraphQLOperationVariables
> = {
  onError: () => navigate(routes.storage()),
  onCompleted: (data) => logdev(data),
}

const GoogleAuthCallbackPage = () => {
  const [checked, setChecked] = React.useState<boolean>(false)
  const { code } = useParams()
  const [add] = useMutation<AddNewGoogleDriveCredentialMutation>(
    ADD_NEW_GOOGLE_DRIVE_CREDENTIAL,
    opts
  )

  React.useEffect(() => {
    if (!code) navigate(routes.storage())
    add({ variables: { input: { code } } })
    logdev({ code })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code])

  return (
    <>
      <Modal opened={true} onClose={() => {}} centered title="Add new storage">
        <Stack spacing={'xl'}>
          <TextInput
            label="Storage Name"
            placeholder="My super secret files..."
            required
            data-autofocus
          />
          <TextInput
            label="Storage Provider"
            placeholder="Google Drive"
            disabled
          />
          <Checkbox
            checked={checked}
            label="I agree to the terms & conditions"
            onChange={() => setChecked(!checked)}
          />
          <Button variant="light">Add storage</Button>
        </Stack>
      </Modal>
      <StoragePage />
    </>
  )
}

export default GoogleAuthCallbackPage
