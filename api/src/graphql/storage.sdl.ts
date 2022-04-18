export const schema = gql`
  type Query {
    listStorage: JSONObject @requireAuth
  }
`
