export const schema = gql`
  type SyncUser {
    result: JSONObject
  }
  type Mutation {
    syncUser: SyncUser @requireAuth
  }
`
