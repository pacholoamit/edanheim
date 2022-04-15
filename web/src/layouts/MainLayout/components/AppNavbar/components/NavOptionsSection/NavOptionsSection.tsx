import PrimaryButton from 'src/components/PrimaryButton'

import { navigate, routes } from '@redwoodjs/router'
import { DefaultMantineColor, Group, ThemeIcon, Text } from '@mantine/core'
import { Plus } from 'tabler-icons-react'

interface NavOptionProps {
  icon: React.ReactNode
  color: DefaultMantineColor
  label: string
  route: string
}

const NavOption: React.FC<NavOptionProps> = ({ icon, color, label, route }) => {
  const onClick = () => navigate(route)
  return (
    <PrimaryButton onClick={onClick}>
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm" weight={600} sx={{ opacity: 0.8 }}>
          {label}
        </Text>
      </Group>
    </PrimaryButton>
  )
}

const NavOptionsSection = () => {
  const options: NavOptionProps[] = [
    {
      icon: <Plus size={16} />,
      color: 'blue',
      label: 'Add Storage provider',
      route: routes.storage(),
    },
  ]

  return (
    <>
      {options.map((option) => (
        <NavOption {...option} key={option.label} />
      ))}
    </>
  )
}

export default NavOptionsSection
