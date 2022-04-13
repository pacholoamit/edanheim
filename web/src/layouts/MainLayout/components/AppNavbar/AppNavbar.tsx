import { Navbar, Text } from '@mantine/core'

interface AppNavbarProps {
  opened: boolean
}

const AppNavbar: React.FC<AppNavbarProps> = ({ opened }) => {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Navbar</Text>
    </Navbar>
  )
}

export default AppNavbar
