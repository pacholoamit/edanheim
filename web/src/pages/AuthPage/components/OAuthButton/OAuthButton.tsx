import useAuthClient from 'src/hooks/useAuthClient'
import { Button } from '@mantine/core'
import { BrandGithub, BrandGoogle } from 'tabler-icons-react'

interface OAuthButtonProps {
  provider: 'github' | 'google'
  scopes?: string
}
const OAuthButton: React.FC<OAuthButtonProps> = ({ provider, scopes }) => {
  const { OAuthLogin } = useAuthClient()

  const onClick = async () => await OAuthLogin({ provider, scopes })

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
