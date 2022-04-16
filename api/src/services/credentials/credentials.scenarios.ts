import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CredentialCreateArgs>({
  credential: {
    one: {
      data: {
        accessToken: 'String',
        updatedAt: '2022-04-16T08:45:01Z',
        storage: {
          create: {
            Provider: 'AWS_S3',
            name: 'String',
            updatedAt: '2022-04-16T08:45:01Z',
            user: {
              create: {
                supabaseId: 'String8099031',
                email: 'String606353',
                updatedAt: '2022-04-16T08:45:01Z',
              },
            },
          },
        },
        user: {
          create: {
            supabaseId: 'String8215370',
            email: 'String6775531',
            updatedAt: '2022-04-16T08:45:01Z',
          },
        },
      },
    },
    two: {
      data: {
        accessToken: 'String',
        updatedAt: '2022-04-16T08:45:01Z',
        storage: {
          create: {
            Provider: 'AWS_S3',
            name: 'String',
            updatedAt: '2022-04-16T08:45:01Z',
            user: {
              create: {
                supabaseId: 'String9202987',
                email: 'String2310183',
                updatedAt: '2022-04-16T08:45:01Z',
              },
            },
          },
        },
        user: {
          create: {
            supabaseId: 'String1067404',
            email: 'String3686667',
            updatedAt: '2022-04-16T08:45:01Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
