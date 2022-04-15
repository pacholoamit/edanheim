import { Card, Center, Grid, Title, useMantineTheme } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'

interface StorageProviderCardProps {
  name: string
  logo: React.ReactElement
  onClick: () => void
}

const sx = {
  card: {
    cursor: 'pointer',
    maxWidth: '250px',
  },
}

const StorageProviderCard: React.FC<StorageProviderCardProps> = ({
  name,
  logo,
  onClick,
}) => {
  const theme = useMantineTheme()
  const { width } = useViewportSize()
  const md = theme.breakpoints.md
  const order = width >= md ? 3 : 4

  return (
    <Grid.Col xs={12} md={4}>
      <Center>
        <Card shadow="lg" sx={sx.card} onClick={onClick}>
          <Card.Section>{logo}</Card.Section>
          <Center>
            <Title order={order}>{name}</Title>
          </Center>
        </Card>
      </Center>
    </Grid.Col>
  )
}

export default StorageProviderCard
