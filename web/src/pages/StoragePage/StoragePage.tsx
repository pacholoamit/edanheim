import useAuthClient from 'src/hooks/useAuthClient'
import StorageProviderCard from 'src/pages/StoragePage/components/StorageProviderCard'
import { AwsS3SVG, GoogleDriveSVG, MicrosoftOneDriveSVG } from 'src/constants'
import { useViewportSize } from '@mantine/hooks'
import {
  Grid,
  MediaQuery,
  Stack,
  Title,
  Space,
  useMantineTheme,
} from '@mantine/core'

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
  const { getGoogleAuthUrl } = useAuthClient()
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
        getGoogleAuthUrl().then(({ data }) =>
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
