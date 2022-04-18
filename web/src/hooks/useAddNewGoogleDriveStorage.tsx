import { useMutation } from '@redwoodjs/web'
import { AddNewGoogleDriveStorageMutation } from 'web/types/graphql'

const ADD_NEW_GOOGLE_DRIVE_STORAGE = gql`
  mutation AddNewGoogleDriveStorageMutation(
    $input: AddNewGoogleDriveStorageInput!
  ) {
    addNewGoogleDriveStorage(input: $input) {
      storageId
    }
  }
`

interface useAddNewGoogleDriveStorageHookOptions {
  onCompleted: () => void
}

const useAddNewGoogleDriveStorage = ({
  onCompleted,
}: useAddNewGoogleDriveStorageHookOptions) => {
  const [addStorage, { loading }] =
    useMutation<AddNewGoogleDriveStorageMutation>(
      ADD_NEW_GOOGLE_DRIVE_STORAGE,
      {
        onCompleted,
      }
    )

  return { addStorage, loading }
}

export default useAddNewGoogleDriveStorage
