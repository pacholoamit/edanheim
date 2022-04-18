import GoogleDriveFilesCell from 'src/pages/GoogleDrivePage/components/GoogleDriveFilesCell'
import { MetaTags } from '@redwoodjs/web'

interface GoogleDrivePageProps {
  id: string
}

const GoogleDrivePage: React.FC<GoogleDrivePageProps> = ({ id }) => {
  const input = {
    storageId: id,
  }
  return (
    <>
      <MetaTags title="GoogleDrive" description="GoogleDrive page" />

      <h1>GoogleDrivePage</h1>
      <GoogleDriveFilesCell input={input} />
    </>
  )
}

export default GoogleDrivePage
