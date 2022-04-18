import PrimaryButton from 'src/components/PrimaryButton'

import { navigate, routes } from '@redwoodjs/router'
import {
  DefaultMantineColor,
  Group,
  ThemeIcon,
  Text,
  MantineTheme,
  useMantineTheme,
  Title,
} from '@mantine/core'
import { Plus } from 'tabler-icons-react'

interface NavOptionProps {
  icon: React.ReactNode
  color: DefaultMantineColor
  label: string
  route: string
}

const sx = (theme?: MantineTheme) => {
  const isDark = theme.colorScheme === 'dark'
  return {
    text: {
      color: isDark ? theme.colors.dark[1] : theme.colors.indigo[7],
    },
  }
}

const NavOption: React.FC<NavOptionProps> = ({ icon, color, label, route }) => {
  const theme = useMantineTheme()
  const onClick = () => navigate(route)
  return (
    <PrimaryButton onClick={onClick}>
      <Group>
        <ThemeIcon size={'lg'} color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm" weight={600} sx={sx(theme).text}>
          {label}
        </Text>
      </Group>
    </PrimaryButton>
  )
}

const NavActionsSection = () => {
  const options: NavOptionProps[] = [
    {
      icon: <Plus size={24} />,
      color: 'indigo',
      label: 'Add Storage',
      route: routes.storage(),
    },
  ]

  return (
    <>
      <Title order={5} sx={{ opacity: 0.5 }}>
        Actions
      </Title>
      {options.map((option) => (
        <NavOption {...option} key={option.label} />
      ))}
    </>
  )
}

export default NavActionsSection
