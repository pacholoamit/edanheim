import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const SignupPage = () => {
  const { client } = useAuth()
  const onSubmit = async (data) => {
    try {
      await client.auth.signUp({
        email: data.email,
        password: data.password,
      })

      navigate(routes.home())
    } catch (error) {
      console.log('error:  ', error)
    }
  }

  return (
    <>
      <MetaTags title="Signup" description="Signup page" />

      <h1>SignupPage</h1>
      <Form onSubmit={onSubmit}>
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Sign Up</Submit>
      </Form>
    </>
  )
}

export default SignupPage
