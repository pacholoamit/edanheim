import PrimaryButton from 'src/components/PrimaryButton'
import useCurrentUser from 'src/hooks/useCurrentUser'

import { ChevronRight } from 'tabler-icons-react'
import {
  Avatar,
  Box,
  Group,
  MantineTheme,
  Text,
  useMantineTheme,
} from '@mantine/core'

const sx = (theme: MantineTheme) => ({
  outerBox: {
    paddingTop: theme.spacing.sm,
  },
  innerBox: {
    flex: 1,
  },
})

const NavUserSection = () => {
  const { user } = useCurrentUser()
  const theme = useMantineTheme()

  return (
    <Box sx={sx(theme).outerBox}>
      <PrimaryButton>
        <Group>
          <Avatar src={user.avatar} radius="xl" />
          <Box sx={sx(theme).innerBox}>
            <Text size="sm" weight={500}>
              {user.name}
            </Text>
            <Text color="dimmed" size="xs">
              {user.email}
            </Text>
          </Box>
          <ChevronRight size={18} />
        </Group>
      </PrimaryButton>
    </Box>
  )
}

export default NavUserSection
