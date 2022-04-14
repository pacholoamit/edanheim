import type { googleDriveFiles } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Card, Grid, Text, Image, Space, Tooltip } from '@mantine/core'
import { edanheimLogo } from 'src/constants'

export const QUERY = gql`
  query googleDriveFiles($session: WebSession!) {
    googleDriveFiles(session: $session) {
      id
      kind
      name
      mimeType
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  googleDriveFiles,
}: CellSuccessProps<googleDriveFiles>) => {
  return (
    <Grid gutter={'xl'}>
      {googleDriveFiles.map((file) => {
        return (
          <Grid.Col key={file.id} sm={2}>
            <Card shadow={'lg'} key={file.id} p="md" sx={{ height: 200 }}>
              <Card.Section>
                <Image src={edanheimLogo} height={160} alt={file.name} />
              </Card.Section>
              <Space h={'sm'} />
              <Tooltip label={file.name}>
                <Text
                  size="sm"
                  sx={(theme) => ({
                    color: theme.colors.gray[7],
                  })}
                  weight={'bold'}
                  lineClamp={1}
                >
                  {file.name}
                </Text>
              </Tooltip>
            </Card>
          </Grid.Col>
        )
      })}
    </Grid>
  )
}
