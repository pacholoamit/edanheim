import NavUserSection from 'src/layouts/MainLayout/components/AppNavbar/components/NavUserSection'
import NavActionsSection from 'src/layouts/MainLayout/components/AppNavbar/components/NavActionsSection'
import NavStorageSection from 'src/layouts/MainLayout/components/AppNavbar/components/NavStorageSection'
import { Navbar, Divider, ScrollArea, Space } from '@mantine/core'

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
      <Navbar.Section grow component={ScrollArea}>
        <Space h={'md'} />
        <NavActionsSection />
        <Space h={'md'} />
        <NavStorageSection />
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
