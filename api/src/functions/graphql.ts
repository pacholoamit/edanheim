import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { createGraphQLHandler } from '@redwoodjs/graphql-server'
import { getCurrentUser } from 'src/lib/auth'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { responseCache } from 'src/lib/redis'

export const handler = createGraphQLHandler({
  getCurrentUser,
  loggerConfig: {
    logger,
    options: { operationName: true, tracing: true, query: true },
  },
  directives,
  sdls,
  services,
  defaultError: 'Oops! Something went wrong, sorry about that',
  extraPlugins: [responseCache],

  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})
