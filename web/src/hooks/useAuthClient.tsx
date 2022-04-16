import { showNotification } from '@mantine/notifications'
import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { CREATE_USER } from 'src/graphql/mutations'

interface OAuthLoginInput {
  provider: 'github' | 'google'
  scopes?: string
}

const useAuthClient = () => {
  const { logIn, currentUser } = useAuth()
  const [createUser, { data }] = useMutation(CREATE_USER)

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

  // Create user if not exists in db
  // Update user if exists in db
  const updateUser = () => {
    return currentUser
    // const { email, name, picture } = data
    // const user = { email, name, picture }
    // createUser({
    //   variables: {
    //     input: {
    //       ...user,
    //     },
    //   },
    // })
  }

  return {
    OAuthLogin,
    updateUser,
  }
}

export default useAuthClient
