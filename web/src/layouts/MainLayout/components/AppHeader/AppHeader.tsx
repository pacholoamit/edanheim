import {
  useMantineTheme,
  Header,
  MediaQuery,
  Burger,
  Image,
  Group,
} from '@mantine/core'
import { edanheimLogo } from 'src/constants'
// import DarkModeButton from 'src/layouts/MainLayout/components/AppHeader/components/DarkModeButton'
interface AppHeaderProps {
  opened: boolean
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const AppHeader: React.FC<AppHeaderProps> = ({ opened, setOpened }) => {
  const theme = useMantineTheme()
  const onClick = () => setOpened((o) => !o)

  return (
    <Header height={70} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Group position="apart">
          <Group>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={onClick}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Image src={edanheimLogo} fit="contain" height={48} />
          </Group>
        </Group>
      </div>
    </Header>
  )
}

export default AppHeader
