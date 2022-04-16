import useGoogleDriveAuthURL from 'src/hooks/useGoogleDriveAuthURL'
import StorageProviderCard from 'src/pages/StoragePage/components/StorageProviderCard'
import UserCell from 'src/components/UserCell'
import { AwsS3SVG, GoogleDriveSVG, MicrosoftOneDriveSVG } from 'src/constants'
import {
  Grid,
  MediaQuery,
  Stack,
  Title,
  Space,
  useMantineTheme,
} from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'

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
  const { query } = useGoogleDriveAuthURL()

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
        query().then(({ data }) =>
          window.open(data.getGoogleDriveAuthUrl, '_self')
        )
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
        <UserCell supabaseId="afd3ba12-b8ff-4624-aa38-97d3c2aee2a7" />
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
