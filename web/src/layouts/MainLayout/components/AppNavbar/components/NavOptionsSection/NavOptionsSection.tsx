import PrimaryButton from 'src/components/PrimaryButton'

import {
  DefaultMantineColor,
  useMantineTheme,
  Group,
  ThemeIcon,
  Text,
} from '@mantine/core'
import { BrandGoogleDrive } from 'tabler-icons-react'

interface NavOptionProps {
  icon: React.ReactNode
  color: DefaultMantineColor
  label: string
}

const NavOption: React.FC<NavOptionProps> = ({ icon, color, label }) => {
  const { colors } = useMantineTheme()
  return (
    <PrimaryButton>
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text
          size="sm"
          color={colors.violet[7]}
          weight={600}
          sx={{ opacity: 0.8 }}
        >
          {label}
        </Text>
      </Group>
    </PrimaryButton>
  )
}

const NavOptionsSection = () => {
  const options: NavOptionProps[] = [
    {
      icon: <BrandGoogleDrive size={16} />,
      color: 'blue',
      label: 'Google Drive Storage',
    },
    // { icon: <AlertCircle size={16} />, color: 'teal', label: 'Open Issues' },
    // { icon: <Messages size={16} />, color: 'violet', label: 'Discussions' },
    // { icon: <Database size={16} />, color: 'grape', label: 'Databases' },
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
