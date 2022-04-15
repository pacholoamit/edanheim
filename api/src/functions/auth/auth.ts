import { ValidationError } from '@redwoodjs/graphql-server'
import type { APIGatewayEvent, Context } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import { authClient } from 'src/lib/google'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, _: Context) => {
  logger.info('Invoked auth function')

  if (!event.queryStringParameters.code) {
    throw new ValidationError('Query string parameter "code" is required.')
  }
  try {
    const { code } = event.queryStringParameters
    const { tokens } = await authClient.getToken(code)

    logger.info(tokens)
    return {
      statusCode: 301,
      headers: {
        Location: process.env.WEB_DOMAIN,
      },
    }
  } catch (err) {
    logger.error('Error in auth function', { err })
    throw new Error(err.message)
  }
}