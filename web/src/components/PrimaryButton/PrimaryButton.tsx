import { MantineTheme, UnstyledButton } from '@mantine/core'

interface PrimaryButtonProps {
  onClick?: () => void
}

const sx = (theme: MantineTheme) => {
  const isDark = theme.colorScheme === 'dark'
  return {
    display: 'block',
    width: '100%',
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: isDark ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: isDark ? theme.colors.dark[6] : theme.colors.violet[0], // Primary color
    },
  }
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <UnstyledButton sx={sx} onClick={onClick}>
      {children}
    </UnstyledButton>
  )
}

export default PrimaryButton
