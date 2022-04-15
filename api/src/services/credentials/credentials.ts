import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const credentials = () => {
  return db.credential.findMany()
}

export const credential = ({ id }: Prisma.CredentialWhereUniqueInput) => {
  return db.credential.findUnique({
    where: { id },
  })
}

interface CreateCredentialArgs {
  input: Prisma.CredentialCreateInput
}

export const createCredential = ({ input }: CreateCredentialArgs) => {
  return db.credential.create({
    data: input,
  })
}

interface UpdateCredentialArgs extends Prisma.CredentialWhereUniqueInput {
  input: Prisma.CredentialUpdateInput
}

export const updateCredential = ({ id, input }: UpdateCredentialArgs) => {
  return db.credential.update({
    data: input,
    where: { id },
  })
}

export const deleteCredential = ({ id }: Prisma.CredentialWhereUniqueInput) => {
  return db.credential.delete({
    where: { id },
  })
}

export const Credential = {
  storage: (_obj, { root }: ResolverArgs<ReturnType<typeof credential>>) =>
    db.credential.findUnique({ where: { id: root.id } }).storage(),
}
