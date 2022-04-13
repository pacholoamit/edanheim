import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  MantineTheme,
  Center,
} from '@mantine/core'

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

interface AppHeaderProps {
  opened: boolean
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const AppHeader: React.FC<AppHeaderProps> = ({ opened, setOpened }) => {
  const theme = useMantineTheme()
  const onClick = () => setOpened((o) => !o)
  return (
    <Header height={70} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={onClick}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Text>Application header</Text>
      </div>
    </Header>
  )
}

const AppFooter: React.FC = () => {
  return (
    <Footer height={60} p="md">
      <Center>Made with ❤️ by Pacholo Amit</Center>
    </Footer>
  )
}

interface MainLayoutProps {
  children?: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [opened, setOpened] = React.useState<boolean>(false)

  const styles = (theme: MantineTheme) => ({
    main: {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  })
  return (
    <AppShell
      padding="md"
      navbar={<AppNavbar opened={opened} />}
      header={<AppHeader opened={opened} setOpened={setOpened} />}
      footer={<AppFooter />}
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
