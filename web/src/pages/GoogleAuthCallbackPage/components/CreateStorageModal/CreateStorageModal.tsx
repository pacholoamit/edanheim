import {
  Modal,
  TextInput,
  Button,
  Stack,
  Checkbox,
  LoadingOverlay,
} from '@mantine/core'
import { useMutation } from '@redwoodjs/web'
import { AddNewGoogleDriveStorageMutation } from 'web/types/graphql'
import { logdev } from 'src/utils'

const ADD_NEW_GOOGLE_DRIVE_STORAGE = gql`
  mutation AddNewGoogleDriveStorageMutation(
    $input: AddNewGoogleDriveStorageInput!
  ) {
    addNewGoogleDriveStorage(input: $input) {
      storageId
    }
  }
`

interface CreateStorageModalProps {
  credentialId: string
  loading: boolean
}

const CreateStorageModal: React.FC<CreateStorageModalProps> = ({
  credentialId,
  loading,
}) => {
  const [storageName, setStorageName] = React.useState<string>('')
  const [checked, setChecked] = React.useState<boolean>(false)
  const [opened, setOpened] = React.useState<boolean>(true)
  const [addStorage] = useMutation<AddNewGoogleDriveStorageMutation>(
    ADD_NEW_GOOGLE_DRIVE_STORAGE
  )
  logdev(loading)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStorageName(e.target.value)
  }

  const onClick = () =>
    addStorage({
      variables: {
        input: {
          name: storageName,
          credentialId,
        },
      },
    })
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(!opened)}
      centered
      title="Add new storage"
    >
      <Stack spacing={'xl'}>
        <TextInput
          label="Storage Name"
          placeholder="My super secret files..."
          required
          onChange={onChange}
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
        <Button
          disabled={!checked}
          variant="light"
          onClick={onClick}
          loading={loading}
        >
          Add storage
        </Button>
      </Stack>
    </Modal>
  )
}

export default CreateStorageModal
