import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.StorageCreateArgs>({
  storage: {
    one: {
      data: {
        Provider: 'AWS_S3',
        name: 'String',
        user: {
          create: {
            supabaseId: 'String392429',
            email: 'String2792876',
            createdAt: '2022-04-16T07:45:03Z',
            updatedAt: '2022-04-16T07:45:03Z',
          },
        },
      },
    },
    two: {
      data: {
        Provider: 'AWS_S3',
        name: 'String',
        user: {
          create: {
            supabaseId: 'String8872024',
            email: 'String1731386',
            createdAt: '2022-04-16T07:45:03Z',
            updatedAt: '2022-04-16T07:45:03Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
