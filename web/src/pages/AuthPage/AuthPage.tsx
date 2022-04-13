import OAuthButton from 'src/pages/AuthPage/components/OAuthButton'
import SignInForm from 'src/pages/AuthPage/components/SignInForm'
import SignUpForm from 'src/pages/AuthPage/components/SignUpForm'
import { Divider, Stack, Title, Center, Image } from '@mantine/core'
import { useToggle } from '@mantine/hooks'
import { edanheimLogo } from 'src/constants'

const AuthPage = () => {
  const [value, toggle] = useToggle('Sign in!', ['Sign up!', 'Sign in!'])
  const isSignIn = value === 'Sign in!'

  return (
    <>
      <Center style={{ height: '95vh' }}>
        <Stack
          justify={'center'}
          align="stretch"
          style={{ width: '80vw', maxWidth: '300px' }}
        >
          {/* Edanheim Logo */}
          <Image src={edanheimLogo} fit="contain" height={200} />
          {/* Auth Title */}
          <Center>
            <Title>{value}</Title>
          </Center>
          {/* OAuth Buttons group */}
          <OAuthButton provider="github" />
          <OAuthButton provider="google" />

          <Divider
            my={'md'}
            variant="dashed"
            label="OR"
            labelPosition="center"
          />
          {/* Forms */}
          {isSignIn ? (
            <SignInForm toggle={toggle} />
          ) : (
            <SignUpForm toggle={toggle} />
          )}
        </Stack>
      </Center>
    </>
  )
}

export default AuthPage
