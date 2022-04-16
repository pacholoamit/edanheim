// import { useMutation } from '@redwoodjs/web'
// import { CREATE_USER } from 'src/graphql/mutations'
// import { CreateUserMutation } from 'web/types/graphql'
// import useCurrentUser from 'src/hooks/useCurrentUser'

// const useDatabase = () => {
//   const { user } = useCurrentUser()
//   const [createUser, _] = useMutation<CreateUserMutation>(CREATE_USER, {
//     onError: (err) => console.log(err),
//   })

//   // Create user if not exists in db
//   // Update user if exists in db

//   const createOrUpdateUser = () => {
//     const { id, email, name } = user

//     createUser({
//       variables: {
//         input: {
//           supabaseId: id,
//           email,
//           name,
//         },
//       },
//     })
//   }

//   return { createOrUpdateUser }
// }

// export default useDatabase
