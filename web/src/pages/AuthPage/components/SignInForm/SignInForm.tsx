import { TextInput, Button, Stack, Group, Text, Center } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const initialValues = {
  email: '',
  password: '',
}

const validate = {
  email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
}

interface SignInFormProps {
  toggle: (value?: React.SetStateAction<string>) => void
}

const SignInForm: React.FC<SignInFormProps> = ({ toggle }) => {
  const { logIn } = useAuth()
  const form = useForm({ initialValues, validate })

  const onSubmit = async ({ email, password }) => {
    try {
      await logIn({ email, password })
      navigate(routes.home())
    } catch (error) {
      console.log(error.message)
    }
  }

  const onClick = () => toggle()
  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Stack>
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <TextInput
          required
          label="Password"
          placeholder="super secret password"
          type="password"
          {...form.getInputProps('password')}
        />

        <Button type="submit">Sign in</Button>
        <Center>
          <Group spacing={'xs'}>
            <Text>Need an account?</Text>
            <Text
              variant="link"
              style={{ cursor: 'pointer' }}
              onClick={onClick}
            >
              Sign up
            </Text>
          </Group>
        </Center>
      </Stack>
    </form>
  )
}

export default SignInForm
