import ColorSchemeToggle from 'src/layouts/MainLayout/components/AppHeader/components/ColorSchemeToggle'
import SignOutButton from 'src/layouts/MainLayout/components/AppHeader/components/SignOutButton'
import {
  useMantineTheme,
  Header,
  MediaQuery,
  Burger,
  Image,
  Group,
} from '@mantine/core'
import { edanheimLogo } from 'src/constants'

interface AppHeaderProps {
  opened: boolean
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const sx = {
  mediaQuery: {
    display: 'none',
  },
  group: {
    height: '100%',
    marginLeft: '1rem',
    marginRight: '1rem',
  },
}

const AppHeader: React.FC<AppHeaderProps> = ({ opened, setOpened }) => {
  const theme = useMantineTheme()
  const onClick = () => setOpened((o) => !o)

  return (
    <Header height={62} p="xs">
      <Group position="apart" align={'center'} sx={sx.group}>
        <MediaQuery largerThan="sm" styles={sx.mediaQuery}>
          <Burger
            opened={opened}
            onClick={onClick}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Image src={edanheimLogo} fit="contain" height={44} />

        <Group>
          <ColorSchemeToggle />
          <SignOutButton />
        </Group>
      </Group>
    </Header>
  )
}

export default AppHeader
