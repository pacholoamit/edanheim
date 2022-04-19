import { useResponseCache } from '@envelop/response-cache'
import { createRedisCache } from '@envelop/response-cache-redis'
import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL)

export const cache = createRedisCache({ redis })

export const responseCache = useResponseCache({
  cache,
  ttl: parseInt(process.env.EXPIRE_IN_SECONDS) * 1000,
  session: (context) => String(context.currentUser.sub),
})
