import OAuthButton from 'src/pages/AuthPage/components/OAuthButton'
import SignInForm from 'src/pages/AuthPage/components/SignInForm'
import SignUpForm from 'src/pages/AuthPage/components/SignUpForm'

import { edanheimLogo } from 'src/constants'
import { useToggle } from '@mantine/hooks'
import {
  Divider,
  Stack,
  Title,
  Center,
  Image,
  Group,
  Text,
} from '@mantine/core'

const AuthPage = () => {
  const [value, toggle] = useToggle('Sign in!', ['Sign up!', 'Sign in!'])
  const isSignIn = value === 'Sign in!'
  const bottomText = isSignIn ? 'Need an account?' : 'Already have an account?'
  const onClick = () => toggle()
  return (
    <>
      <Center style={{ height: '95vh' }}>
        <Stack
          justify={'center'}
          align="stretch"
          style={{ width: '80vw', maxWidth: '300px' }}
        >
          {/* Edanheim Logo */}
          <Image
            src={edanheimLogo}
            fit="contain"
            height={200}
            alt="Edanheim logo"
          />
          {/* Auth Title */}
          <Center>
            <Title>{value}</Title>
          </Center>
          {/* OAuth Buttons group */}
          <OAuthButton provider="github" />
          <OAuthButton provider="google" />
          {/* Divider */}
          <Divider
            my={'md'}
            variant="dashed"
            label="OR"
            labelPosition="center"
          />
          {/* Forms */}
          {isSignIn ? <SignInForm /> : <SignUpForm />}
          {/* Bottom Text & Link */}
          <Center>
            <Group spacing={'xs'}>
              <Text>{bottomText}</Text>
              <Text
                variant="link"
                style={{ cursor: 'pointer' }}
                onClick={onClick}
              >
                {value}
              </Text>
            </Group>
          </Center>
          {/* Bottom Text & Link END */}
        </Stack>
      </Center>
    </>
  )
}

export default AuthPage
