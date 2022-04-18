import type { ListStorageQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Text } from '@mantine/core'

export const QUERY = gql`
  query ListStorageQuery {
    listStorage {
      id
      name
      credential {
        accessToken
        refreshToken
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  listStorage,
}: CellSuccessProps<ListStorageQuery>) => {
  return (
    <>
      {listStorage.map((storage) => (
        <div key={storage.id}>
          <Text>{storage.name}</Text>
        </div>
      ))}
    </>
  )
}
