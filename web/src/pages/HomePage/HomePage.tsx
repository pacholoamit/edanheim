import SignoutBtn from 'src/components/SignoutBtn'
import useCurrentUser from 'src/hooks/useCurrentUser'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useQuery } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const QUERY = gql`
  query getGoogleDrive($providerToken: String!, $refreshToken: String!) {
    getGoogleDrive(providerToken: $providerToken, refreshToken: $refreshToken) {
      data
    }
  }
`

const HomePage = () => {
  const { user, sessionTokens } = useCurrentUser()
  const { currentUser, userMetadata } = useAuth()
  const { data } = useQuery(QUERY, {
    onError: (error) => console.log(error),
    variables: {
      providerToken: sessionTokens.providerToken,
      refreshToken: sessionTokens.refreshToken,
    },
  })

  console.log({ currentUser, userMetadata })
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>Welcome {user.name}</p>
      <SignoutBtn />
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
