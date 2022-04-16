import { Link, routes, useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GoogleAuthCallbackPage = () => {
  const { code, scope } = useParams()

  console.log({ code, scope })

  // TODO: Already working... NEXT STEP is to add a server function to consume the code and scope
  return (
    <>
      <MetaTags
        title="GoogleAuthCallback"
        description="GoogleAuthCallback page"
      />

      <h1>GoogleAuthCallbackPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/GoogleAuthCallbackPage/GoogleAuthCallbackPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>googleAuthCallback</code>, link to me
        with `<Link to={routes.googleAuthCallback()}>GoogleAuthCallback</Link>`
      </p>
    </>
  )
}

export default GoogleAuthCallbackPage
