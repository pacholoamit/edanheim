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
} from '@mantine/core'

import { ChevronRight, ChevronLeft } from 'tabler-icons-react'

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
            : theme.colors.gray[0],
      },
    },
  }
  return (
    <Navbar.Section>
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

            {theme.dir === 'ltr' ? (
              <ChevronRight size={18} />
            ) : (
              <ChevronLeft size={18} />
            )}
          </Group>
        </UnstyledButton>
      </Box>
    </Navbar.Section>
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
      <Navbar.Section>
        <Text>Section</Text>
      </Navbar.Section>
      <Divider />
      <UserDetails />
    </Navbar>
  )
}

export default AppNavbar
