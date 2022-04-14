import { useAuth } from '@redwoodjs/auth'

const useCurrentUser = () => {
  const { userMetadata } = useAuth()

  const user = {
    name: 'Guy',
    avatar: 'https://somehwere.png',
    email: 'guy@gmail.com',
  }

  return { user }
}

export default useCurrentUser
