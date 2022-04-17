export const schema = gql`
  type Credential {
    id: String!
    accessToken: String!
    refreshToken: String
    scope: String
    tokenType: String
    expiryDate: DateTime
    user: User!
    userId: String!
    storage: Storage
    storageId: String
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
    userId: String!
    storageId: String
  }

  input UpdateCredentialInput {
    accessToken: String
    refreshToken: String
    scope: String
    tokenType: String
    expiryDate: DateTime
    userId: String
    storageId: String
  }

  type Mutation {
    createCredential(input: CreateCredentialInput!): Credential! @requireAuth
    updateCredential(id: String!, input: UpdateCredentialInput!): Credential!
      @requireAuth
    deleteCredential(id: String!): Credential! @requireAuth
  }
`
