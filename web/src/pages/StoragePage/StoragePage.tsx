import { Center, MediaQuery, Title } from '@mantine/core'

const sx = {
  mediaQuery: {
    marginTop: '15rem',
  },
  center: {
    marginTop: '1rem',
  },
}
const StoragePage = () => {
  return (
    <MediaQuery largerThan={'sm'} styles={sx.mediaQuery}>
      <Center sx={sx.center}>
        <Title>Add Storage Provider</Title>
      </Center>
    </MediaQuery>
  )
}

export default StoragePage
