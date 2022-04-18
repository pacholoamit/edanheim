export const schema = gql`
  type ListStorageResult {
    id: String
    provider: StorageProvider
    name: String
  }

  type RequiredCredential {
    accessToken: String
    refreshToken: String
  }
  type Query {
    listStorage: [ListStorageResult!]! @requireAuth
  }
`
