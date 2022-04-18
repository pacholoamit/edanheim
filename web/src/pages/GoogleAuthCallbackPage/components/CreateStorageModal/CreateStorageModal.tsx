import useAddNewGoogleDriveStorage from 'src/hooks/useAddNewGoogleDriveStorage'
import { Modal, TextInput, Button, Stack, Checkbox } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { Check } from 'tabler-icons-react'

interface CreateStorageModalProps {
  credentialId: string
  loading: boolean
}

const CreateStorageModal: React.FC<CreateStorageModalProps> = ({
  credentialId,
  loading: loadingCredential,
}) => {
  const [storageName, setStorageName] = React.useState<string>('')
  const [checked, setChecked] = React.useState<boolean>(false)
  const [opened, setOpened] = React.useState<boolean>(true)
  const { addStorage, loading } = useAddNewGoogleDriveStorage({
    onCompleted: () => {
      showNotification({
        title: 'Niceeeee....',
        message: 'Storage created',
        color: 'teal',
        icon: <Check />,
      })
      setOpened(false)
    },
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStorageName(e.target.value)
  }

  const onClick = () => {
    addStorage({ variables: { input: { name: storageName, credentialId } } })
  }

  const isLoading = loadingCredential || loading
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
          loading={isLoading}
        >
          Add storage
        </Button>
      </Stack>
    </Modal>
  )
}

export default CreateStorageModal
