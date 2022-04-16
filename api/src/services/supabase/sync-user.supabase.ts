import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

/**
 *
 * Synchronizes a user with Supabase. By Default Supabase auth table is not exposed
 * in the API. We sync our postgres USER table with Supabase for record keeping.
 *
 */
export const syncUser = async () => {
  const { currentUser } = context
  const { user_metadata } = currentUser
  const metadata = user_metadata as unknown as any
  let message = null

  const userInDb = await db.user.findUnique({
    where: {
      supabaseId: currentUser.sub as string,
    },
  })

  // Create user
  if (!userInDb) {
    await db.user.create({
      data: {
        email: currentUser.email as string,
        supabaseId: currentUser.sub as string,
        name: metadata.full_name ?? currentUser.email,
      },
    })
    message = `User ${currentUser.email} created`
    logger.info(message)
  }

  // TODO: Implement update on user
  return {
    result: {
      message,
    },
  }
}
