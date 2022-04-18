import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { ListStorageResult } from 'api/types/graphql'

export const listStorage = async (): Promise<ListStorageResult[]> => {
  const { currentUser } = context

  const { storage } = await db.user.findUnique({
    select: {
      storage: {
        select: {
          id: true,
          name: true,
          provider: true,
        },
      },
    },
    where: {
      supabaseId: currentUser.sub,
    },
  })

  logger.info({ custom: { storage } }, `Found storage for ${currentUser.email}`)

  return storage
}
