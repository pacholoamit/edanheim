import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CredentialCreateArgs>({
  credential: {
    one: {
      data: {
        accessToken: 'String',
        updatedAt: '2022-04-17T12:01:36Z',
        user: {
          create: {
            supabaseId: 'String9050646',
            email: 'String4459121',
            updatedAt: '2022-04-17T12:01:36Z',
          },
        },
      },
    },
    two: {
      data: {
        accessToken: 'String',
        updatedAt: '2022-04-17T12:01:36Z',
        user: {
          create: {
            supabaseId: 'String8768354',
            email: 'String1192297',
            updatedAt: '2022-04-17T12:01:36Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
