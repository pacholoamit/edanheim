import { useMutation } from '@redwoodjs/web'
import { SYNC_USER } from 'src/graphql/mutations'
import { SyncUserMutation } from 'web/types/graphql'

interface UserLoaderProps {
  children: React.ReactNode
}

/**
 *
 * Syncs user to db
 */
const UserLoader: React.FC<UserLoaderProps> = ({ children }) => {
  const [syncUser, { data }] = useMutation<SyncUserMutation>(SYNC_USER)

  React.useEffect(() => {
    syncUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (data) console.log(data)
  return <>{children}</>
}

export default UserLoader
