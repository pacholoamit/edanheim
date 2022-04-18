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
  input GetGoogleDriveStorageInput {
    storageId: ID!
  }

  type GetGoogleDriveStorageResult {
    kind: String
    id: String
    name: String
    mimeType: String
  }
  type Query {
    googleDriveFiles(session: WebSession!): [GoogleDriveFile!]! @requireAuth
    getGoogleDriveAuthUrl: String! @requireAuth
    getGoogleDriveStorage(
      input: GetGoogleDriveStorageInput!
    ): [GetGoogleDriveStorageResult!]! @requireAuth
  }

  input AddNewGoogleDriveCredentialInput {
    code: String!
  }

  type AddNewGoogleDriveCredentialResult {
    credentialId: ID!
  }

  input AddNewGoogleDriveStorageInput {
    credentialId: ID!
    name: String!
  }

  type AddNewGoogleDriveStorageResult {
    storageId: ID!
  }
  type Mutation {
    addNewGoogleDriveCredential(
      input: AddNewGoogleDriveCredentialInput
    ): AddNewGoogleDriveCredentialResult @requireAuth

    addNewGoogleDriveStorage(
      input: AddNewGoogleDriveStorageInput
    ): AddNewGoogleDriveStorageResult @requireAuth
  }
`
