import { MantineTheme, UnstyledButton } from '@mantine/core'

const sx = (theme: MantineTheme) => ({
  display: 'block',
  width: '100%',
  padding: theme.spacing.xs,
  borderRadius: theme.radius.sm,
  color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

  '&:hover': {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.violet[0], // Primary color
  },
})

interface PrimaryButtonProps {
  onClick?: () => void
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <UnstyledButton sx={sx} onClick={onClick}>
      {children}
    </UnstyledButton>
  )
}

export default PrimaryButton
