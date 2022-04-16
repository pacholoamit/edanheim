export const FIND_USER = gql`
  query FindUserQuery($supabaseId: String!) {
    user: user(supabaseId: $supabaseId) {
      id
      email
      name
    }
  }
`
