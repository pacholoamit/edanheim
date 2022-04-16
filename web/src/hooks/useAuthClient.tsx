import { showNotification } from '@mantine/notifications'
import { useAuth } from '@redwoodjs/auth'
import { SupabaseUser } from '@redwoodjs/auth/dist/authClients'
import { useLazyQuery, LazyQueryHookOptions } from '@apollo/client'
import { GET_GOOGLE_DRIVE_AUTH_URL } from 'src/graphql/queries'
import { GetGoogleDriveAuthUrlQuery } from 'web/types/graphql'
interface OAuthLoginInput {
  provider: 'github' | 'google'
  scopes?: string
}

const lazyQueryOpts: LazyQueryHookOptions = {
  onError: (error) =>
    showNotification({
      title: 'Something went wrong',
      message: error.message,
      color: 'red',
    }),
}

const useAuthClient = () => {
  const { logIn, userMetadata } = useAuth()
  const [getGoogleAuthUrl] = useLazyQuery<GetGoogleDriveAuthUrlQuery>(
    GET_GOOGLE_DRIVE_AUTH_URL,
    lazyQueryOpts
  )
  const supabaseUser = userMetadata as SupabaseUser

  /**
   * Login for Oauth providers
   */
  const OAuthLogin = async ({ provider, scopes }: OAuthLoginInput) => {
    try {
      await logIn({
        provider,
        scopes,
      })
    } catch (error) {
      showNotification({
        title: 'Oops! Something went wrong.',
        message: 'Please try again later',
      })
    }
  }

  /**
   * Referenced User throughout the app
   */

  const user = supabaseUser
    ? {
        id: supabaseUser.id,
        name: supabaseUser.user_metadata.full_name ?? supabaseUser?.email,
        avatar: supabaseUser.user_metadata.avatar_url,
        email: supabaseUser.email,
      }
    : null

  return {
    OAuthLogin,
    user,

    getGoogleAuthUrl,
  }
}

export default useAuthClient
