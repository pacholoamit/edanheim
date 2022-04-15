import {
  Grid,
  MediaQuery,
  Stack,
  Title,
  Space,
  useMantineTheme,
} from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import useGoogleDriveAuthURL from 'src/hooks/useGoogleDriveAuthURL'
import AwsS3SVG from 'public/assets/providers/aws.svg'
import GoogleDriveSVG from 'public/assets/providers/google-drive.svg'
import MicrosoftOneDriveSVG from 'public/assets/providers/microsoft-onedrive.svg'
import StorageProviderCard from 'src/pages/StoragePage/components/StorageProviderCard/StorageProviderCard'

const sx = {
  mediaQuery: {
    marginTop: '15rem',
    marginLeft: '10%',
    marginRight: '10%',
  },
  stack: {
    marginTop: '1rem',
  },
  svgLogo: {
    height: '100%',
    width: '100%',
  },
}

const StoragePage = () => {
  const { width } = useViewportSize()
  const { refetch } = useGoogleDriveAuthURL()
  const theme = useMantineTheme()
  const isMd = width >= theme.breakpoints.md

  const storageProviders = [
    {
      name: 'AWS S3',
      logo: <AwsS3SVG style={sx.svgLogo} />,
      onClick: () => {},
    },
    {
      name: 'Google Drive',
      logo: <GoogleDriveSVG style={sx.svgLogo} />,
      onClick: () => {
        refetch().then((data) => console.log(data))
      },
    },
    {
      name: 'MS OneDrive',
      logo: <MicrosoftOneDriveSVG style={sx.svgLogo} />,
      onClick: () => {},
    },
  ]

  return (
    <MediaQuery largerThan={'md'} styles={sx.mediaQuery}>
      <Stack sx={sx.stack} justify="center" align={'center'}>
        <Title>Add Storage Provider</Title>
        {isMd && <Space h={'sm'} />}
        <Grid gutter={'xl'} justify="center" align={'center'}>
          {storageProviders.map((provider) => (
            <StorageProviderCard key={provider.name} {...provider} />
          ))}
        </Grid>
      </Stack>
    </MediaQuery>
  )
}

export default StoragePage
