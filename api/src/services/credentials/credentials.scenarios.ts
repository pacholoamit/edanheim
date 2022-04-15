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
            user: { create: { id: 'String9653373', email: 'String8780611' } },
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
            user: { create: { id: 'String9645192', email: 'String523990' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
