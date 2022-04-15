import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { Sun, MoonStars } from 'tabler-icons-react'

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const isDark = colorScheme === 'dark'
  const color = isDark ? 'yellow' : 'blue'
  const onClick = () => toggleColorScheme()

  return (
    <ActionIcon
      variant="outline"
      color={color}
      onClick={onClick}
      title="Toggle color scheme"
    >
      {isDark ? <Sun size={18} /> : <MoonStars size={18} />}
    </ActionIcon>
  )
}

export default ColorSchemeToggle
