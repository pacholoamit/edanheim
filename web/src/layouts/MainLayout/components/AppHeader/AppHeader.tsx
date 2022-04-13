import {
  useMantineTheme,
  Header,
  MediaQuery,
  Burger,
  Text,
} from '@mantine/core'

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
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={onClick}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Text>Application header</Text>
      </div>
    </Header>
  )
}

export default AppHeader
