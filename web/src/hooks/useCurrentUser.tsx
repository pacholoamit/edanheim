import { useLocalStorage } from '@mantine/hooks'
import { useAuth } from '@redwoodjs/auth'

const useCurrentUser = () => {
  const { userMetadata } = useAuth()
  const [sessionData, _] = useLocalStorage({ key: 'supabase.auth.token' })

  const session = sessionData as unknown as any

  const sessionTokens = {
    providerToken: session?.currentSession?.provider_token,
    refreshToken: session?.currentSession?.refresh_token,
  }

  const user = {
    name: userMetadata.user_metadata.full_name ?? userMetadata.email,
    avatar: userMetadata.user_metadata.avatar_url,
    email: userMetadata.email,
  }

  return { user, sessionTokens }
}

export default useCurrentUser
