import SignoutBtn from 'src/components/SignoutBtn'
import useCurrentUser from 'src/hooks/useCurrentUser'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useQuery } from '@redwoodjs/web'

const QUERY = gql`
  query getGoogleDrive($session: WebSession!) {
    getGoogleDrive(session: $session) {
      data
    }
  }
`

const HomePage = () => {
  const { user, session } = useCurrentUser()

  const { data } = useQuery(QUERY, {
    onError: (error) => console.log(error),
    variables: {
      session,
    },
  })

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
