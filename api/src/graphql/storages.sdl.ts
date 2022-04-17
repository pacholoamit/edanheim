export const schema = gql`
  type Storage {
    id: String!
    provider: StorageProvider!
    name: String!
    user: User!
    userId: String!
    credential: Credential
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum StorageProvider {
    AWS_S3
    GOOGLE_DRIVE
    MS_ONECLOUD
  }

  type Query {
    storages: [Storage!]! @requireAuth
    storage(id: String!): Storage @requireAuth
  }

  input CreateStorageInput {
    provider: StorageProvider!
    name: String!
    userId: String!
  }

  input UpdateStorageInput {
    provider: StorageProvider
    name: String
    userId: String
  }

  type Mutation {
    createStorage(input: CreateStorageInput!): Storage! @requireAuth
    updateStorage(id: String!, input: UpdateStorageInput!): Storage!
      @requireAuth
    deleteStorage(id: String!): Storage! @requireAuth
  }
`
