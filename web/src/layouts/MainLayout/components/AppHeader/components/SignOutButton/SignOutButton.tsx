import { ActionIcon, useMantineTheme } from '@mantine/core'
import { useAuth } from '@redwoodjs/auth'
import { Logout } from 'tabler-icons-react'

const SignOutButton = () => {
  const theme = useMantineTheme()
  const { logOut } = useAuth()
  const onClick = () => logOut()
  return (
    <ActionIcon
      variant="light"
      onClick={onClick}
      color={theme.primaryColor}
      title="Log out"
      size={'lg'}
    >
      <Logout size={20} />
    </ActionIcon>
  )
}

export default SignOutButton
