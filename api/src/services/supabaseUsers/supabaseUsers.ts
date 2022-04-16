import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const supabaseUsers = () => {
  return db.supabaseUser.findMany()
}

export const supabaseUser = ({ id }: Prisma.SupabaseUserWhereUniqueInput) => {
  return db.supabaseUser.findUnique({
    where: { id },
  })
}

interface CreateSupabaseUserArgs {
  input: Prisma.SupabaseUserCreateInput
}

export const createSupabaseUser = ({ input }: CreateSupabaseUserArgs) => {
  return db.supabaseUser.create({
    data: input,
  })
}

interface UpdateSupabaseUserArgs extends Prisma.SupabaseUserWhereUniqueInput {
  input: Prisma.SupabaseUserUpdateInput
}

export const updateSupabaseUser = ({ id, input }: UpdateSupabaseUserArgs) => {
  return db.supabaseUser.update({
    data: input,
    where: { id },
  })
}

export const deleteSupabaseUser = ({
  id,
}: Prisma.SupabaseUserWhereUniqueInput) => {
  return db.supabaseUser.delete({
    where: { id },
  })
}

export const SupabaseUser = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof supabaseUser>>) =>
    db.supabaseUser.findUnique({ where: { id: root.id } }).user(),
}
