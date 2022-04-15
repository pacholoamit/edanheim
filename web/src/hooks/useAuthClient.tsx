import { showNotification } from '@mantine/notifications'
import { useAuth } from '@redwoodjs/auth'

interface OAuthLoginInput {
  provider: 'github' | 'google'
  scopes?: string
}

const useAuthClient = () => {
  const { logIn } = useAuth()

  const OAuthLogin = async ({ provider, scopes }: OAuthLoginInput) => {
    try {
      const userData = await logIn({
        provider,
        scopes,
      })
      console.log({ userData })
    } catch (error) {
      showNotification({
        title: 'Oops! Something went wrong.',
        message: 'Please try again later',
      })
      console.log(error.message)
    }
  }

  return {
    OAuthLogin,
  }
}

export default useAuthClient
