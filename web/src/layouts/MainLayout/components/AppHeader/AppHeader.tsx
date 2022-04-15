import ColorSchemeToggle from 'src/layouts/MainLayout/components/AppHeader/components/ColorSchemeToggle'

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
}

const AppHeader: React.FC<AppHeaderProps> = ({ opened, setOpened }) => {
  const theme = useMantineTheme()
  const onClick = () => setOpened((o) => !o)

  return (
    <Header height={72} p="md">
      <Group position="apart" align={'center'}>
        <MediaQuery largerThan="sm" styles={sx.mediaQuery}>
          <Burger
            opened={opened}
            onClick={onClick}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Image src={edanheimLogo} fit="contain" height={48} />

        <ColorSchemeToggle />
      </Group>
    </Header>
  )
}

export default AppHeader
