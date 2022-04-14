export const schema = gql`
  type GoogleDriveData {
    data: JSONObject!
  }

  input WebSession {
    provider_token: String!
    access_token: String!
    expires_in: Int!
    expires_at: Int!
    refresh_token: String!
    token_type: String!
    user: JSONObject!
  }

  type Query {
    getGoogleDrive(session: WebSession!): GoogleDriveData! @requireAuth
  }
`
