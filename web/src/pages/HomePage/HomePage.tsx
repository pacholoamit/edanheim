import { useAuth } from '@redwoodjs/auth'
import { SupabaseUser } from '@redwoodjs/auth/dist/authClients'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import SignoutBtn from 'src/components/SignoutBtn/SignoutBtn'

const HomePage = () => {
  const { userMetadata } = useAuth()

  const user = userMetadata as SupabaseUser
  const name = user.user_metadata.full_name ?? user.email

  return (
    <>
      <MetaTags title="Home" description="Home page" />


      <h1>HomePage</h1>
      <p>Welcome {name}</p>
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
