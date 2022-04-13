import { TextInput, Button, Stack } from '@mantine/core'
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

const RegisterForm = () => {
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

        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  )
}

export default RegisterForm
