import useCurrentUser from 'src/hooks/useCurrentUser'
import GoogleDriveFilesCell from 'src/components/GoogleDriveFilesCell'
import { Space, Title } from '@mantine/core'

const HomePage = () => {
  const { user, session } = useCurrentUser()

  return (
    <>
      <h1>HomePage</h1>
      <p>Welcome {user.name}</p>

      <Title>Files </Title>
      <Space h={'lg'} />
      <GoogleDriveFilesCell session={session} />
    </>
  )
}

export default HomePage
