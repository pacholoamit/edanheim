import useDevelopment from 'src/hooks/useDevelopment'
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
  const [syncUser, { data, error }] = useMutation<SyncUserMutation>(SYNC_USER)
  const { log } = useDevelopment()

  React.useEffect(() => {
    syncUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  log(data) // Development logging
  if (error) console.log(error)

  return <>{children}</>
}

export default UserLoader
