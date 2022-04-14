import { Auth0Client } from '@auth0/auth0-spa-js'
import { Button } from '@mantine/core'
import { useAuth } from '@redwoodjs/auth'
import { navigate } from '@redwoodjs/router'
import { BrandGithub, BrandGoogle } from 'tabler-icons-react'

interface OAuthButtonProps {
  provider: 'github' | 'google'
}
const OAuthButton: React.FC<OAuthButtonProps> = ({ provider }) => {
  const { client } = useAuth()

  const authClient = client as Auth0Client

  const onClick = async () => {
    try {
      await authClient.loginWithPopup({
        connection: 'google-oauth2',
        scope: 'https://www.googleapis.com/auth/drive',
      })
      navigate('/home')
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
