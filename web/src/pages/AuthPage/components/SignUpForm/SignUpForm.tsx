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

interface SignUpFormProps {
  toggle: (value?: React.SetStateAction<string>) => void
}

const SignUpForm: React.FC<SignUpFormProps> = ({ toggle }) => {
  const { client } = useAuth()
  const form = useForm({ initialValues, validate })

  const onSubmit = async ({ email, password }) => {
    try {
      await client.auth.signUp({ email, password })

      navigate(routes.home())
    } catch (error) {
      console.log('error:  ', error)
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

        <Button type="submit">Sign up</Button>
        <Center>
          <Group spacing={'xs'}>
            <Text>Already have an account?</Text>
            <Text
              variant="link"
              style={{ cursor: 'pointer' }}
              onClick={onClick}
            >
              Sign in
            </Text>
          </Group>
        </Center>
      </Stack>
    </form>
  )
}

export default SignUpForm
