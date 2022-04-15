export const schema = gql`
  type Storage {
    id: String!
    Provider: StorageProvider!
    name: String!
    user: User!
    userId: String!
    Credential: Credential
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
    Provider: StorageProvider!
    name: String!
    userId: String!
  }

  input UpdateStorageInput {
    Provider: StorageProvider
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
