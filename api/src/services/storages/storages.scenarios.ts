import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.StorageCreateArgs>({
  storage: {
    one: {
      data: {
        Provider: 'AWS_S3',
        name: 'String',
        updatedAt: '2022-04-16T08:44:44Z',
        user: {
          create: {
            supabaseId: 'String9742643',
            email: 'String2188275',
            updatedAt: '2022-04-16T08:44:44Z',
          },
        },
      },
    },
    two: {
      data: {
        Provider: 'AWS_S3',
        name: 'String',
        updatedAt: '2022-04-16T08:44:44Z',
        user: {
          create: {
            supabaseId: 'String7781336',
            email: 'String727460',
            updatedAt: '2022-04-16T08:44:44Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
