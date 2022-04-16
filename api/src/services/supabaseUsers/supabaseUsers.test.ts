import {
  supabaseUsers,
  supabaseUser,
  createSupabaseUser,
  updateSupabaseUser,
  deleteSupabaseUser,
} from './supabaseUsers'
import type { StandardScenario } from './supabaseUsers.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('supabaseUsers', () => {
  scenario('returns all supabaseUsers', async (scenario: StandardScenario) => {
    const result = await supabaseUsers()

    expect(result.length).toEqual(Object.keys(scenario.supabaseUser).length)
  })

  scenario(
    'returns a single supabaseUser',
    async (scenario: StandardScenario) => {
      const result = await supabaseUser({ id: scenario.supabaseUser.one.id })

      expect(result).toEqual(scenario.supabaseUser.one)
    }
  )

  scenario('creates a supabaseUser', async (scenario: StandardScenario) => {
    const result = await createSupabaseUser({
      input: {
        userId: scenario.supabaseUser.two.userId,
        supabaseId: 'String',
        createdAt: 'String',
        updatedAt: 'String',
      },
    })

    expect(result.userId).toEqual(scenario.supabaseUser.two.userId)
    expect(result.supabaseId).toEqual('String')
    expect(result.createdAt).toEqual('String')
    expect(result.updatedAt).toEqual('String')
  })

  scenario('updates a supabaseUser', async (scenario: StandardScenario) => {
    const original = await supabaseUser({ id: scenario.supabaseUser.one.id })
    const result = await updateSupabaseUser({
      id: original.id,
      input: { supabaseId: 'String2' },
    })

    expect(result.supabaseId).toEqual('String2')
  })

  scenario('deletes a supabaseUser', async (scenario: StandardScenario) => {
    const original = await deleteSupabaseUser({
      id: scenario.supabaseUser.one.id,
    })
    const result = await supabaseUser({ id: original.id })

    expect(result).toEqual(null)
  })
})
