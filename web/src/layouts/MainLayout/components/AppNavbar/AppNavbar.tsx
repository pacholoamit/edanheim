import useCurrentUser from 'src/hooks/useCurrentUser'

import {
  Navbar,
  Divider,
  Group,
  Avatar,
  Text,
  Box,
  UnstyledButton,
  useMantineTheme,
  ThemeIcon,
  DefaultMantineColor,
} from '@mantine/core'
import {
  ChevronRight,
  AlertCircle,
  GitPullRequest,
  Messages,
  Database,
} from 'tabler-icons-react'

interface NavBarOptionProps {
  icon: React.ReactNode
  color: DefaultMantineColor
  label: string
}

const NavBarOption: React.FC<NavBarOptionProps> = ({ icon, color, label }) => {
  const { colors } = useMantineTheme()
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.violet[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text
          size="sm"
          color={colors.violet[7]}
          weight={700}
          sx={{ opacity: 0.8 }}
        >
          {label}
        </Text>
      </Group>
    </UnstyledButton>
  )
}

const NavBarOptions = () => {
  const options = [
    {
      icon: <GitPullRequest size={16} />,
      color: 'blue',
      label: 'Pull Requests',
    },
    { icon: <AlertCircle size={16} />, color: 'teal', label: 'Open Issues' },
    { icon: <Messages size={16} />, color: 'violet', label: 'Discussions' },
    { icon: <Database size={16} />, color: 'grape', label: 'Databases' },
  ]

  return (
    <>
      {options.map((options) => (
        <NavBarOption {...options} key={options.label} />
      ))}
    </>
  )
}

const UserDetails = () => {
  const { user } = useCurrentUser()
  const theme = useMantineTheme()

  const sx = {
    box: {
      paddingTop: theme.spacing.sm,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },
    unstyledButton: {
      display: 'block',
      width: '100%',
      padding: theme.spacing.xs,
      borderRadius: theme.radius.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.violet[0],
      },
    },
  }
  return (
    <Box sx={sx.box}>
      <UnstyledButton sx={sx.unstyledButton}>
        <Group>
          <Avatar src={user.avatar} radius="xl" />
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {user.name}
            </Text>
            <Text color="dimmed" size="xs">
              {user.email}
            </Text>
          </Box>

          <ChevronRight size={18} />
        </Group>
      </UnstyledButton>
    </Box>
  )
}
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
      <Navbar.Section grow>
        <NavBarOptions />
      </Navbar.Section>
      <Divider />
      <Navbar.Section>
        <UserDetails />
      </Navbar.Section>
    </Navbar>
  )
}

export default AppNavbar
