import useAuthForm from 'src/pages/AuthPage/hooks/useAuthForm'

import { TextInput, Button, Stack } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const initialValues = {
  email: '',
  password: '',
}

const SignUpForm: React.FC = () => {
  const { client } = useAuth()
  const { validate } = useAuthForm()
  const form = useForm({ initialValues, validate })

  const onSubmit = async ({ email, password }) => {
    try {
      await client.auth.signUp({ email, password })

      navigate(routes.home())
    } catch (error) {
      console.log('error:  ', error)
    }
  }

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
      </Stack>
    </form>
  )
}

export default SignUpForm
