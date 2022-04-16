import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const storages = () => {
  return db.storage.findMany()
}

export const storage = ({ id }: Prisma.StorageWhereUniqueInput) => {
  return db.storage.findUnique({
    where: { id },
  })
}

interface CreateStorageArgs {
  input: Prisma.StorageCreateInput
}

export const createStorage = ({ input }: CreateStorageArgs) => {
  return db.storage.create({
    data: input,
  })
}

interface UpdateStorageArgs extends Prisma.StorageWhereUniqueInput {
  input: Prisma.StorageUpdateInput
}

export const updateStorage = ({ id, input }: UpdateStorageArgs) => {
  return db.storage.update({
    data: input,
    where: { id },
  })
}

export const deleteStorage = ({ id }: Prisma.StorageWhereUniqueInput) => {
  return db.storage.delete({
    where: { id },
  })
}

export const Storage = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof storage>>) =>
    db.storage.findUnique({ where: { id: root.id } }).user(),
  credential: (_obj, { root }: ResolverArgs<ReturnType<typeof storage>>) =>
    db.storage.findUnique({ where: { id: root.id } }).credential(),
}
