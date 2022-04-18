import type { GetGoogleDriveStorageQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import {
  Card,
  Grid,
  MantineTheme,
  Space,
  Tooltip,
  Image,
  Text,
} from '@mantine/core'

export const QUERY = gql`
  query GetGoogleDriveStorageQuery($input: GetGoogleDriveStorageInput!) {
    getGoogleDriveStorage(input: $input) {
      id
      kind
      mimeType
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  getGoogleDriveStorage,
}: CellSuccessProps<GetGoogleDriveStorageQuery>) => {
  const sx = (theme: MantineTheme) => ({
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[2]
        : theme.colors.gray[7],
  })
  return (
    <Grid gutter={'xl'}>
      {getGoogleDriveStorage.map((file) => {
        return (
          <Grid.Col key={file.id} sm={2}>
            <Card shadow={'lg'} key={file.id} p="md" sx={{ height: 200 }}>
              <Card.Section>
                <Image
                  src={null}
                  height={160}
                  alt={file.name}
                  withPlaceholder
                />
              </Card.Section>
              <Space h={'sm'} />
              <Tooltip label={file.name}>
                <Text size="sm" sx={sx} weight={'bold'} lineClamp={1}>
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
