export const schema = gql`
  type ListStorageResult {
    credential: RequiredCredential
    id: String
    provider: StorageProvider
    name: String
    userId: String
    createdAt: Date
    updatedAt: Date
  }

  type RequiredCredential {
    accessToken: String
    refreshToken: String
  }
  type Query {
    listStorage: [ListStorageResult!]! @requireAuth
  }
`
