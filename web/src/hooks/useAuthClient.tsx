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

  const validateUser = () => {
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
    validateUser,
    currentUser,
  }
}

export default useAuthClient
