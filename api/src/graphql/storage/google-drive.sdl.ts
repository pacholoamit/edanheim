export const schema = gql`
  type GoogleDriveFile {
    kind: String!
    id: String!
    name: String!
    mimeType: String!
  }

  input WebSession {
    provider_token: String
    access_token: String
    expires_in: Int
    expires_at: Int
    refresh_token: String
    token_type: String
  }

  type Query {
    googleDriveFiles(session: WebSession!): [GoogleDriveFile!]! @requireAuth
  }
`
