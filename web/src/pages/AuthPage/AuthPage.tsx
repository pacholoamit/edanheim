import RegisterForm from 'src/components/RegisterForm/RegisterForm'
import LoginForm from 'src/components/LoginForm/LoginForm'
import { MetaTags } from '@redwoodjs/web'
import { Divider, Stack, Title, Center, Text, Group } from '@mantine/core'
import { useToggle } from '@mantine/hooks'

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
  const [value, toggle] = useToggle('Log in!!', ['Sign up!', 'Log in!'])

  return (
    <>
      <MetaTags title="Auth" description="Auth page" />

      <Center style={{ height: '90vh' }}>
        <Stack
          justify={'center'}
          align="stretch"
          style={{ width: '80vw', maxWidth: '300px' }}
        >
          <AuthPageTitle value={value} />
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
