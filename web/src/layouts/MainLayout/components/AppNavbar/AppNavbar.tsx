import NavUserSection from 'src/layouts/MainLayout/components/AppNavbar/components/NavUserSection'
import NavOptionsSection from 'src/layouts/MainLayout/components/AppNavbar/components/NavOptionsSection'
import { Navbar, Divider } from '@mantine/core'

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
      {/* Nav Options */}
      <Navbar.Section grow>
        <NavOptionsSection />
      </Navbar.Section>
      <Divider />
      {/* User Details */}
      <Navbar.Section>
        <NavUserSection />
      </Navbar.Section>
    </Navbar>
  )
}

export default AppNavbar
