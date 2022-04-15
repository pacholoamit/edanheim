import {
  credentials,
  credential,
  createCredential,
  updateCredential,
  deleteCredential,
} from './credentials'
import type { StandardScenario } from './credentials.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('credentials', () => {
  scenario('returns all credentials', async (scenario: StandardScenario) => {
    const result = await credentials()

    expect(result.length).toEqual(Object.keys(scenario.credential).length)
  })

  scenario(
    'returns a single credential',
    async (scenario: StandardScenario) => {
      const result = await credential({ id: scenario.credential.one.id })

      expect(result).toEqual(scenario.credential.one)
    }
  )

  scenario('creates a credential', async (scenario: StandardScenario) => {
    const result = await createCredential({
      input: {
        accessToken: 'String',
        storageId: scenario.credential.two.storageId,
      },
    })

    expect(result.accessToken).toEqual('String')
    expect(result.storageId).toEqual(scenario.credential.two.storageId)
  })

  scenario('updates a credential', async (scenario: StandardScenario) => {
    const original = await credential({ id: scenario.credential.one.id })
    const result = await updateCredential({
      id: original.id,
      input: { accessToken: 'String2' },
    })

    expect(result.accessToken).toEqual('String2')
  })

  scenario('deletes a credential', async (scenario: StandardScenario) => {
    const original = await deleteCredential({ id: scenario.credential.one.id })
    const result = await credential({ id: original.id })

    expect(result).toEqual(null)
  })
})
