import { Button } from '@mantine/core'
import { useAuth } from '@redwoodjs/auth'
import { BrandGithub, BrandGoogle } from 'tabler-icons-react'

interface OAuthButtonProps {
  provider: 'github' | 'google'
}
const OAuthButton: React.FC<OAuthButtonProps> = ({ provider }) => {
  const { logIn } = useAuth()

  const onClick = async () => {
    try {
      await logIn({
        provider,
        scopes: 'https://www.googleapis.com/auth/drive',
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  if (provider === 'github')
    return (
      <Button leftIcon={<BrandGithub />} color={'dark'} onClick={onClick}>
        Github
      </Button>
    )

  if (provider === 'google')
    return (
      <Button leftIcon={<BrandGoogle />} color={'blue'} onClick={onClick}>
        Google
      </Button>
    )
}

export default OAuthButton
