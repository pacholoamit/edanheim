import type { ListStorageQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ListStorageQuery {
    listStorage
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
  return <div>{JSON.stringify(listStorage)}</div>
}
