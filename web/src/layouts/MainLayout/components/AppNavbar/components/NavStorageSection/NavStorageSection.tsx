import { Title } from '@mantine/core'
import ListStorageCell from 'src/layouts/MainLayout/components/AppNavbar/components/NavStorageSection/components/ListStorageCell'

const NavStorageSection: React.FC = () => {
  return (
    <>
      <Title order={5} sx={{ opacity: 0.5 }}>
        My Storage
      </Title>
      <ListStorageCell />
    </>
  )
}

export default NavStorageSection
