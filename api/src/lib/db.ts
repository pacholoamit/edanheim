// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

import { PrismaClient } from '@prisma/client'
import { emitLogLevels, handlePrismaLogging } from '@redwoodjs/api/logger'
import { logger } from 'src/lib/logger'
import {
  isPrismaMiddlewareInvalidationEnabled,
  handlePrismaInvalidation,
} from 'src/lib/cache'

/*
 * Instance of the Prisma Client
 */
export const db = new PrismaClient({
  log: emitLogLevels(['info', 'warn', 'error']),
})

handlePrismaLogging({
  db,
  logger,
  logLevels: ['info', 'warn', 'error'],
})

if (isPrismaMiddlewareInvalidationEnabled) {
  db.$use(async (params, next) => {
    await handlePrismaInvalidation(params)
    const result = await next(params)
    return result
  })
}
