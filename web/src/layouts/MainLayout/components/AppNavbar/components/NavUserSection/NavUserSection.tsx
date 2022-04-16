import PrimaryButton from 'src/components/PrimaryButton'
import useAuthClient from 'src/hooks/useAuthClient'

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
  const { user } = useAuthClient()
  const theme = useMantineTheme()

  return (
    <Box sx={sx(theme).outerBox}>
      <PrimaryButton>
        <Group>
          <Avatar src={user.avatar} radius="xl" />
          <Box sx={sx(theme).innerBox}>
            <Text size="sm" weight={500} lineClamp={1}>
              {user.name}
            </Text>
            <Text color="dimmed" size="xs" lineClamp={1}>
              {user.email}
            </Text>
          </Box>
        </Group>
      </PrimaryButton>
    </Box>
  )
}

export default NavUserSection
