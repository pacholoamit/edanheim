import { useAuth } from '@redwoodjs/auth'
import { SupabaseUser } from '@redwoodjs/auth/dist/authClients'

const useCurrentUser = () => {
  const { userMetadata } = useAuth()

  // const authSession = authClient.auth.session()

  // const session = {
  //   provider_token: authSession.provider_token,
  //   access_token: authSession.access_token,
  //   expires_in: authSession.expires_in,
  //   expires_at: authSession.expires_at,
  //   refresh_token: authSession.refresh_token,
  //   token_type: authSession.token_type,
  // }

  const supabaseUser = userMetadata as SupabaseUser

  const user = {
    id: supabaseUser.id,
    name: supabaseUser.user_metadata.full_name ?? supabaseUser.email,
    avatar: supabaseUser.user_metadata.avatar_url,
    email: supabaseUser.email,
  }

  return { user }
}

export default useCurrentUser
