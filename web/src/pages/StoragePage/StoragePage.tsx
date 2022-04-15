import { Grid, MediaQuery, Stack, Title, Card } from '@mantine/core'
import AwsS3SVG from 'public/assets/providers/aws.svg'
import GoogleDriveSVG from 'public/assets/providers/google-drive.svg'
import MicrosoftOneDriveSVG from 'public/assets/providers/microsoft-onedrive.svg'

const sx = {
  mediaQuery: {
    marginTop: '15rem',
    marginLeft: '20%',
    marginRight: '20%',
  },
  stack: {
    marginTop: '1rem',
  },
  cardSection: {
    height: '100%',
  },
}
const StoragePage = () => {
  return (
    <MediaQuery largerThan={'sm'} styles={sx.mediaQuery}>
      <Stack sx={sx.stack} justify="center" align={'center'}>
        <Title>Add Storage Provider</Title>
        <Grid gutter={'xl'}>
          <Grid.Col md={4} sm={12}>
            <Card shadow="lg">
              <Card.Section>
                <AwsS3SVG style={{ width: '100%', height: '100%' }} />
              </Card.Section>
            </Card>
          </Grid.Col>

          <Grid.Col md={4} sm={12}>
            <Card shadow="lg">
              <Card.Section>
                <GoogleDriveSVG style={{ width: '100%', height: '100%' }} />
              </Card.Section>
            </Card>
          </Grid.Col>

          <Grid.Col md={4} sm={12}>
            <Card shadow="lg">
              <Card.Section>
                <MicrosoftOneDriveSVG
                  style={{ width: '100%', height: '100%' }}
                />
              </Card.Section>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </MediaQuery>
  )
}

export default StoragePage
