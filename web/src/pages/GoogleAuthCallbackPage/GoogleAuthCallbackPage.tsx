import { useParams } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

const ADD_NEW_GOOGLE_DRIVE = gql`
  mutation AddNewGoogleDriveMutation($input: AddNewGoogleDriveInput!) {
    addNewGoogleDrive(input: $input) {
      message
    }
  }
`

const GoogleAuthCallbackPage = () => {
  const { code } = useParams()
  const [add, { data }] = useMutation(ADD_NEW_GOOGLE_DRIVE)

  React.useEffect(() => {
    if (code) {
      add({ variables: { input: { code } } })
    }
  }, [code])

  console.log(data)

  // TODO: Already working... NEXT STEP is to add a graphql resolver to consume the code and scope
  return (
    <>
      <MetaTags
        title="GoogleAuthCallback"
        description="GoogleAuthCallback page"
      />

      <h1>GoogleAuthCallbackPage</h1>
      <p>{code}</p>
    </>
  )
}

export default GoogleAuthCallbackPage
