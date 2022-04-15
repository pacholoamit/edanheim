import { useAuth } from '@redwoodjs/auth'
import { Redirect, routes } from '@redwoodjs/router'

type AuthLayoutProps = {
  children?: React.ReactNode
}

/**
 * A layout wrapper to check if the user is authenticated.
 * This is meant to wrap around routes that AUTHENTICATED
 * users should not have access to. (I.E auth pages)
 *
 */
const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Redirect to={routes.storage()} />
  }
  return <>{children}</>
}

export default AuthLayout
