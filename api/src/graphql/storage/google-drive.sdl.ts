export const schema = gql`
  type GoogleDriveData {
    data: JSONObject!
  }

  type Query {
    getGoogleDrive(
      providerToken: String!
      refreshToken: String!
    ): GoogleDriveData! @skipAuth
  }
`
