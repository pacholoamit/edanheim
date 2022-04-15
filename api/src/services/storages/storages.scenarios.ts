import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.StorageCreateArgs>({
  storage: {
    one: {
      data: {
        Provider: 'AWS_S3',
        name: 'String',
        user: { create: { id: 'String3019001', email: 'String3407891' } },
      },
    },
    two: {
      data: {
        Provider: 'AWS_S3',
        name: 'String',
        user: { create: { id: 'String2214296', email: 'String3841696' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
