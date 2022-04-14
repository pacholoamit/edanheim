import { useAuth } from '@redwoodjs/auth'
import { SupabaseClient } from '@supabase/supabase-js'

const useCurrentUser = () => {
  const { userMetadata, client } = useAuth()

  const authClient = client as SupabaseClient

  const session = authClient.auth.session()

  const user = {
    name: userMetadata.user_metadata.full_name ?? userMetadata.email,
    avatar: userMetadata.user_metadata.avatar_url,
    email: userMetadata.email,
  }

  return { user, session }
}

export default useCurrentUser
