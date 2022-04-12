import { useAuth } from '@redwoodjs/auth'
import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SigninPage = () => {
  const { logIn } = useAuth()
  const onSubmit = async (data) => {
    try {
      await logIn({
        email: data.email,
        password: data.password,
      })
      navigate(routes.home())
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <MetaTags title="Signin" description="Signin page" />

      <h1>Sign In</h1>
      <Form onSubmit={onSubmit}>
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Sign In</Submit>
      </Form>
    </>
  )
}

export default SigninPage
