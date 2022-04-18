import PrimaryButton from 'src/components/PrimaryButton'
import type { ListStorageQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import {
  Group,
  MantineTheme,
  Text,
  ThemeIcon,
  useMantineTheme,
} from '@mantine/core'
import { BrandGoogleDrive } from 'tabler-icons-react'

export const QUERY = gql`
  query ListStorageQuery {
    listStorage {
      id
      name
    }
  }
`

const sx = (theme?: MantineTheme) => {
  const isDark = theme.colorScheme === 'dark'
  return {
    text: {
      color: isDark ? theme.colors.dark[1] : theme.colors.indigo[7],
    },
  }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  listStorage,
}: CellSuccessProps<ListStorageQuery>) => {
  const theme = useMantineTheme()

  return (
    <>
      {listStorage.map((storage) => (
        <PrimaryButton onClick={() => {}} key={storage.id}>
          <Group>
            <ThemeIcon size={'lg'} color={'indigo'} variant="light">
              <BrandGoogleDrive size={24} />
            </ThemeIcon>

            <Text size="sm" weight={600} sx={sx(theme).text}>
              {storage.name}
            </Text>
          </Group>
        </PrimaryButton>
      ))}
    </>
  )
}
