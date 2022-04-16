import { users, user, createUser, updateUser, deleteUser } from './users'
import type { StandardScenario } from './users.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('users', () => {
  scenario('returns all users', async (scenario: StandardScenario) => {
    const result = await users()

    expect(result.length).toEqual(Object.keys(scenario.user).length)
  })

  scenario('returns a single user', async (scenario: StandardScenario) => {
    const result = await user({ id: scenario.user.one.id })

    expect(result).toEqual(scenario.user.one)
  })

  scenario('creates a user', async () => {
    const result = await createUser({
      input: {
        supabaseId: 'String5935691',
        email: 'String3339446',
        createdAt: '2022-04-16T07:44:41Z',
        updatedAt: '2022-04-16T07:44:41Z',
      },
    })

    expect(result.supabaseId).toEqual('String5935691')
    expect(result.email).toEqual('String3339446')
    expect(result.createdAt).toEqual('2022-04-16T07:44:41Z')
    expect(result.updatedAt).toEqual('2022-04-16T07:44:41Z')
  })

  scenario('updates a user', async (scenario: StandardScenario) => {
    const original = await user({ id: scenario.user.one.id })
    const result = await updateUser({
      id: original.id,
      input: { supabaseId: 'String56471632' },
    })

    expect(result.supabaseId).toEqual('String56471632')
  })

  scenario('deletes a user', async (scenario: StandardScenario) => {
    const original = await deleteUser({ id: scenario.user.one.id })
    const result = await user({ id: original.id })

    expect(result).toEqual(null)
  })
})
