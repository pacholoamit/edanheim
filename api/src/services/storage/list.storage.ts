import { db } from 'src/lib/db'

export const listStorage = () => {
  const { currentUser } = context

  const storage = db.user.findUnique({
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

  return storage
}
