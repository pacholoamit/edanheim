import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ supabaseId }: Prisma.UserWhereUniqueInput) => {
  return db.user.findUnique({
    where: { supabaseId },
  })
}

interface CreateUserArgs {
  input: Prisma.UserCreateInput
}

export const createUser = ({ input }: CreateUserArgs) => {
  return db.user.create({
    data: input,
  })
}

interface UpdateUserArgs extends Prisma.UserWhereUniqueInput {
  input: Prisma.UserUpdateInput
}

export const updateUser = ({ supabaseId, input }: UpdateUserArgs) => {
  return db.user.update({
    data: input,
    where: { supabaseId },
  })
}

export const deleteUser = ({ supabaseId }: Prisma.UserWhereUniqueInput) => {
  return db.user.delete({
    where: { supabaseId },
  })
}

export const User = {
  storage: (_obj, { root }: ResolverArgs<ReturnType<typeof user>>) =>
    db.user.findUnique({ where: { supabaseId: root.supabaseId } }).storage(),
  credentials: (_obj, { root }: ResolverArgs<ReturnType<typeof user>>) =>
    db.user
      .findUnique({ where: { supabaseId: root.supabaseId } })
      .credentials(),
}
