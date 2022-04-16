export const CREATE_USER = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      supabaseId
      email
      name
    }
  }
`
