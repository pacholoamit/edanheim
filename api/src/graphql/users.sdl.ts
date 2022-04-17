export const schema = gql`
  type User {
    id: String!
    supabaseId: String!
    email: String!
    name: String
    storage: [Storage]!
    credentials: [Credential]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    supabaseId: String!
    email: String!
    name: String
  }

  input UpdateUserInput {
    supabaseId: String
    email: String
    name: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
