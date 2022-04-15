export const schema = gql`
  type Credential {
    id: String!
    accessToken: String!
    storage: Storage!
    storageId: String!
  }

  type Query {
    credentials: [Credential!]! @requireAuth
    credential(id: String!): Credential @requireAuth
  }

  input CreateCredentialInput {
    accessToken: String!
    storageId: String!
  }

  input UpdateCredentialInput {
    accessToken: String
    storageId: String
  }

  type Mutation {
    createCredential(input: CreateCredentialInput!): Credential! @requireAuth
    updateCredential(id: String!, input: UpdateCredentialInput!): Credential!
      @requireAuth
    deleteCredential(id: String!): Credential! @requireAuth
  }
`
