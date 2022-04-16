import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        supabaseId: 'String7744037',
        email: 'String437598',
        createdAt: '2022-04-16T07:44:41Z',
        updatedAt: '2022-04-16T07:44:41Z',
      },
    },
    two: {
      data: {
        supabaseId: 'String910730',
        email: 'String4524078',
        createdAt: '2022-04-16T07:44:41Z',
        updatedAt: '2022-04-16T07:44:41Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
