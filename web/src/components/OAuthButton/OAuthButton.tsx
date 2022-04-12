import { Button } from '@mantine/core'
import { useAuth } from '@redwoodjs/auth'

interface OAuthButtonProps {
  provider: 'github' | 'google' | 'facebook'
}
const OAuthButton: React.FC<OAuthButtonProps> = ({ provider }) => {
  const { client } = useAuth()

  const onClick = async () => {
    try {
      await client.auth.signIn({ provider })
    } catch (error) {
      console.log(error.message)
    }
  }

  if (provider === 'github')
    return (
      <Button color={'dark'} onClick={onClick}>
        Github
      </Button>
    )
}

export default OAuthButton
