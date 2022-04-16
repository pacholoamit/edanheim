import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.SupabaseUserCreateArgs>({
  supabaseUser: {
    one: {
      data: {
        supabaseId: 'String',
        createdAt: 'String',
        updatedAt: 'String',
        user: { create: { email: 'String7866990' } },
      },
    },
    two: {
      data: {
        supabaseId: 'String',
        createdAt: 'String',
        updatedAt: 'String',
        user: { create: { email: 'String3475553' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
