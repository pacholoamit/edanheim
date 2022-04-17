import { logdev } from 'src/utils'
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
  const [syncUser] = useMutation<SyncUserMutation>(SYNC_USER, {
    onError: (err) => logdev(err),
    onCompleted: (data) => logdev(data),
  })

  React.useEffect(() => {
    syncUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}

export default UserLoader
