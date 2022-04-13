import RegisterForm from 'src/pages/AuthPage/components/RegisterForm'
import OAuthButton from 'src/pages/AuthPage/components/OAuthButton'
import LoginForm from 'src/pages/AuthPage/components/LoginForm'
import {
  Divider,
  Stack,
  Title,
  Center,
  Text,
  Group,
  Image,
} from '@mantine/core'
import { useToggle } from '@mantine/hooks'
import { edanheimLogo } from 'src/constants'

interface AuthPageTitleProps {
  value: string
}
const AuthPageTitle: React.FC<AuthPageTitleProps> = ({ value }) => {
  return (
    <Center>
      <Title>{value}</Title>
    </Center>
  )
}

const OAuthButtonsGroup = () => {
  return (
    <>
      <OAuthButton provider="github" />
      <OAuthButton provider="google" />
    </>
  )
}

interface CallToActionProps {
  value: string
  toggle: (value?: React.SetStateAction<string>) => void
}
const CallToAction: React.FC<CallToActionProps> = ({ value, toggle }) => {
  const onClick = () => toggle()
  const introText =
    value === 'Sign up!' ? 'Already have an account?' : 'Need an account?'
  const link = value === 'Sign up!' ? 'Log in' : 'Sign up'

  return (
    <Center>
      <Group spacing={'xs'}>
        <Text>{introText}</Text>
        <Text variant="link" style={{ cursor: 'pointer' }} onClick={onClick}>
          {link}
        </Text>
      </Group>
    </Center>
  )
}

const AuthPage = () => {
  const [value, toggle] = useToggle('Log in!', ['Sign up!', 'Log in!'])

  return (
    <>
      <Center style={{ height: '95vh' }}>
        <Stack
          justify={'center'}
          align="stretch"
          style={{ width: '80vw', maxWidth: '300px' }}
        >
          <Image src={edanheimLogo} fit="contain" height={200} />
          <AuthPageTitle value={value} />
          <OAuthButtonsGroup />
          <Divider
            my={'md'}
            variant="dashed"
            label="OR"
            labelPosition="center"
          />
          {value === 'Sign up!' ? <RegisterForm /> : <LoginForm />}
          <CallToAction value={value} toggle={toggle} />
        </Stack>
      </Center>
    </>
  )
}

export default AuthPage
