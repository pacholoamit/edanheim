import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CredentialCreateArgs>({
  credential: {
    one: {
      data: {
        accessToken: 'String',
        storage: {
          create: {
            Provider: 'AWS_S3',
            name: 'String',
            user: {
              create: {
                supabaseId: 'String6966539',
                email: 'String779426',
                createdAt: '2022-04-16T07:45:18Z',
                updatedAt: '2022-04-16T07:45:18Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        accessToken: 'String',
        storage: {
          create: {
            Provider: 'AWS_S3',
            name: 'String',
            user: {
              create: {
                supabaseId: 'String6807136',
                email: 'String9689903',
                createdAt: '2022-04-16T07:45:18Z',
                updatedAt: '2022-04-16T07:45:18Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
