import { useMutation, useQuery } from '@redwoodjs/web'
import { FIND_USER } from 'src/graphql/queries'
import { CreateUserMutation, FindUserQuery } from 'web/types/graphql'
import { CREATE_USER } from 'src/graphql/mutations'
import useAuthClient from 'src/hooks/useAuthClient'

interface UserLoaderProps {
  children: React.ReactNode
}

const UserLoader: React.FC<UserLoaderProps> = ({ children }) => {
  const { user } = useAuthClient()
  const [createUser] = useMutation<CreateUserMutation>(CREATE_USER)
  const { error } = useQuery<FindUserQuery>(FIND_USER, {
    variables: { supabaseId: user.id },
  })

  React.useEffect(() => {
    // If user does not exist, create one
    if (error)
      createUser({
        variables: {
          input: {
            supabaseId: user.id,
            email: user.email,
            name: user.name,
          },
        },
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}

export default UserLoader
