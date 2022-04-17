import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CredentialCreateArgs>({
  credential: {
    one: {
      data: {
        accessToken: 'String',
        updatedAt: '2022-04-17T08:31:14Z',
        storage: {
          create: {
            provider: 'AWS_S3',
            name: 'String',
            updatedAt: '2022-04-17T08:31:14Z',
            user: {
              create: {
                supabaseId: 'String5971924',
                email: 'String2154170',
                updatedAt: '2022-04-17T08:31:14Z',
              },
            },
          },
        },
        user: {
          create: {
            supabaseId: 'String3830301',
            email: 'String8774124',
            updatedAt: '2022-04-17T08:31:14Z',
          },
        },
      },
    },
    two: {
      data: {
        accessToken: 'String',
        updatedAt: '2022-04-17T08:31:14Z',
        storage: {
          create: {
            provider: 'AWS_S3',
            name: 'String',
            updatedAt: '2022-04-17T08:31:14Z',
            user: {
              create: {
                supabaseId: 'String7346662',
                email: 'String5712851',
                updatedAt: '2022-04-17T08:31:14Z',
              },
            },
          },
        },
        user: {
          create: {
            supabaseId: 'String6495692',
            email: 'String5279410',
            updatedAt: '2022-04-17T08:31:14Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
