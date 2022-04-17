export const schema = gql`
  type Credential {
    id: String!
    accessToken: String!
    refreshToken: String
    scope: String
    tokenType: String
    expiryDate: DateTime
    storage: Storage!
    storageId: String!
    user: User!
    userId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    credentials: [Credential!]! @requireAuth
    credential(id: String!): Credential @requireAuth
  }

  input CreateCredentialInput {
    accessToken: String!
    refreshToken: String
    scope: String
    tokenType: String
    expiryDate: DateTime
    storageId: String!
    userId: String!
  }

  input UpdateCredentialInput {
    accessToken: String
    refreshToken: String
    scope: String
    tokenType: String
    expiryDate: DateTime
    storageId: String
    userId: String
  }

  type Mutation {
    createCredential(input: CreateCredentialInput!): Credential! @requireAuth
    updateCredential(id: String!, input: UpdateCredentialInput!): Credential!
      @requireAuth
    deleteCredential(id: String!): Credential! @requireAuth
  }
`
