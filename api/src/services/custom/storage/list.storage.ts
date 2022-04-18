import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { decrypt } from 'src/lib/crypto'

export const listStorage = async () => {
  const { currentUser } = context

  const { storage } = await db.user.findUnique({
    select: {
      storage: {
        include: {
          credential: {
            select: {
              accessToken: true,
              refreshToken: true,
            },
          },
        },
      },
    },
    where: {
      supabaseId: currentUser.sub,
    },
  })

  logger.info({ custom: { storage } }, `Found storage for ${currentUser.email}`)

  const decryptedStorage = storage.map((storage) => {
    const { credential } = storage
    const { accessToken, refreshToken } = credential

    return {
      ...storage,
      credential: {
        ...credential,
        accessToken: accessToken && decrypt(accessToken),
        refreshToken: refreshToken && decrypt(refreshToken),
      },
    }
  })

  return decryptedStorage
}
