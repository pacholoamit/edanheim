import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        supabaseId: 'String4316464',
        email: 'String3479106',
        updatedAt: '2022-04-17T08:31:39Z',
      },
    },
    two: {
      data: {
        supabaseId: 'String7990939',
        email: 'String7757935',
        updatedAt: '2022-04-17T08:31:39Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
