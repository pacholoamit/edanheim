import {
  storages,
  storage,
  createStorage,
  updateStorage,
  deleteStorage,
} from './storages'
import type { StandardScenario } from './storages.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('storages', () => {
  scenario('returns all storages', async (scenario: StandardScenario) => {
    const result = await storages()

    expect(result.length).toEqual(Object.keys(scenario.storage).length)
  })

  scenario('returns a single storage', async (scenario: StandardScenario) => {
    const result = await storage({ id: scenario.storage.one.id })

    expect(result).toEqual(scenario.storage.one)
  })

  scenario('creates a storage', async (scenario: StandardScenario) => {
    const result = await createStorage({
      input: {
        provider: 'AWS_S3',
        name: 'String',
        userId: scenario.storage.two.userId,
        updatedAt: '2022-04-17T08:31:26Z',
      },
    })

    expect(result.provider).toEqual('AWS_S3')
    expect(result.name).toEqual('String')
    expect(result.userId).toEqual(scenario.storage.two.userId)
    expect(result.updatedAt).toEqual('2022-04-17T08:31:26Z')
  })

  scenario('updates a storage', async (scenario: StandardScenario) => {
    const original = await storage({ id: scenario.storage.one.id })
    const result = await updateStorage({
      id: original.id,
      input: { provider: 'MS_ONECLOUD' },
    })

    expect(result.provider).toEqual('MS_ONECLOUD')
  })

  scenario('deletes a storage', async (scenario: StandardScenario) => {
    const original = await deleteStorage({ id: scenario.storage.one.id })
    const result = await storage({ id: original.id })

    expect(result).toEqual(null)
  })
})
