import { useAuth } from '@redwoodjs/auth'
import { SupabaseClient } from '@supabase/supabase-js'

const useCurrentUser = () => {
  const { userMetadata, client } = useAuth()

  const authClient = client as SupabaseClient

  const authSession = authClient.auth.session()

  const session = {
    provider_token: authSession.provider_token,
    access_token: authSession.access_token,
    expires_in: authSession.expires_in,
    expires_at: authSession.expires_at,
    refresh_token: authSession.refresh_token,
    token_type: authSession.token_type,
  }

  const user = {
    name: userMetadata.user_metadata.full_name ?? userMetadata.email,
    avatar: userMetadata.user_metadata.avatar_url,
    email: userMetadata.email,
  }

  return { user, session }
}

export default useCurrentUser
