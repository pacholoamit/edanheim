import { showNotification } from '@mantine/notifications'
import { useAuth } from '@redwoodjs/auth'

interface OAuthLoginInput {
  provider: 'github' | 'google'
  scopes?: string
}

const useAuthClient = () => {
  const { logIn } = useAuth()

  // Login for Oauth Providers
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

  return {
    OAuthLogin,
  }
}

export default useAuthClient
