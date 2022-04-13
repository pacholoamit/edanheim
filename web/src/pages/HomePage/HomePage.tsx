import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import SignoutBtn from 'src/components/SignoutBtn/SignoutBtn'
import useCurrentUser from 'src/hooks/useCurrentUser'

const HomePage = () => {
  const { user } = useCurrentUser()

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
