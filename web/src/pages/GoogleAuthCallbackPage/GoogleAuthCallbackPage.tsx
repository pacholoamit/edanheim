import StoragePage from 'src/pages/NewStoragePage'
import CreateStorageModal from 'src/pages/GoogleAuthCallbackPage/components/CreateStorageModal'
import { default as useGoogleCredential } from 'src/hooks/useAddNewGoogleDriveCredential'
import { navigate, routes, useParams } from '@redwoodjs/router'
import { ApolloError } from '@apollo/client'

const onError = (_: ApolloError) => navigate(routes.storage())

const GoogleAuthCallbackPage = () => {
  const { code } = useParams()
  const { addCredential, crededentialId, loading } = useGoogleCredential(code, {
    onError,
  })

  React.useEffect(() => {
    if (!code) navigate(routes.storage())
    addCredential({ variables: { input: { code } } })

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
