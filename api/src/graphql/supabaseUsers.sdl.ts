export const schema = gql`
  type SupabaseUser {
    id: String!
    user: User!
    userId: String!
    supabaseId: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    supabaseUsers: [SupabaseUser!]! @requireAuth
    supabaseUser(id: String!): SupabaseUser @requireAuth
  }

  input CreateSupabaseUserInput {
    userId: String!
    supabaseId: String!
  }

  input UpdateSupabaseUserInput {
    userId: String
    supabaseId: String
  }

  type Mutation {
    createSupabaseUser(input: CreateSupabaseUserInput!): SupabaseUser!
      @requireAuth
    updateSupabaseUser(
      id: String!
      input: UpdateSupabaseUserInput!
    ): SupabaseUser! @requireAuth
    deleteSupabaseUser(id: String!): SupabaseUser! @requireAuth
  }
`
