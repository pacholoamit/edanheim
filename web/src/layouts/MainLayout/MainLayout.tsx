import AppHeader from 'src/layouts/MainLayout/components/AppHeader'
import AppNavbar from 'src/layouts/MainLayout/components/AppNavbar'

import { AppShell, MantineTheme } from '@mantine/core'

const styles = (theme: MantineTheme) => ({
  main: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
  },
})

const MainLayout: React.FC = ({ children }) => {
  const [opened, setOpened] = React.useState<boolean>(false)

  return (
    <AppShell
      padding="md"
      navbar={<AppNavbar opened={opened} />}
      header={<AppHeader opened={opened} setOpened={setOpened} />}
      styles={styles}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
    >
      {children}
    </AppShell>
  )
}

export default MainLayout
