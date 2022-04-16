import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        supabaseId: 'String8928573',
        email: 'String3691671',
        updatedAt: '2022-04-16T08:44:30Z',
      },
    },
    two: {
      data: {
        supabaseId: 'String8357171',
        email: 'String1349016',
        updatedAt: '2022-04-16T08:44:30Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
