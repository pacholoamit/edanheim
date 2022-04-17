import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.StorageCreateArgs>({
  storage: {
    one: {
      data: {
        provider: 'AWS_S3',
        name: 'String',
        updatedAt: '2022-04-17T08:31:26Z',
        user: {
          create: {
            supabaseId: 'String5216151',
            email: 'String6881014',
            updatedAt: '2022-04-17T08:31:26Z',
          },
        },
      },
    },
    two: {
      data: {
        provider: 'AWS_S3',
        name: 'String',
        updatedAt: '2022-04-17T08:31:26Z',
        user: {
          create: {
            supabaseId: 'String8386135',
            email: 'String813552',
            updatedAt: '2022-04-17T08:31:26Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
