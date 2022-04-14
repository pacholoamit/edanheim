import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String2991302' } },
    two: { data: { email: 'String6960874' } },
  },
})

export type StandardScenario = typeof standard
