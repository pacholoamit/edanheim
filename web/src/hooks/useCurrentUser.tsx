import { useAuth } from '@redwoodjs/auth'

const useCurrentUser = () => {
  const { userMetadata } = useAuth()

  const user = {
    name: userMetadata.user_metadata.full_name ?? userMetadata.email,
    avatar: userMetadata.user_metadata.avatar_url,
    email: userMetadata.email,
  }

  return { user }
}

export default useCurrentUser
