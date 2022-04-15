import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { id: 'String6561726', email: 'String2105037' } },
    two: { data: { id: 'String3461457', email: 'String2740483' } },
  },
})

export type StandardScenario = typeof standard
