import { AuthenticationError } from '@redwoodjs/graphql-server'
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

  try {
    await db.user.upsert({
      where: {
        supabaseId: currentUser.sub,
      },
      create: {
        supabaseId: currentUser.sub,
        name: user_metadata.full_name ?? currentUser.email,
        email: currentUser.email,
      },
      update: {
        name: user_metadata.full_name ?? currentUser.email,
        email: currentUser.email,
      },
    })

    return {
      result: {
        message: 'User synced successfully',
      },
    }
  } catch (err) {
    logger.error(err)
    throw new AuthenticationError('Error syncing user with Supabase')
  }
}
