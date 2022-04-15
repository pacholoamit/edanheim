import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StoragePage = () => {
  return (
    <>
      <MetaTags title="Storage" description="Storage page" />

      <h1>StoragePage</h1>
      <p>
        Find me in <code>./web/src/pages/StoragePage/StoragePage.tsx</code>
      </p>
      <p>
        My default route is named <code>storage</code>, link to me with `
        <Link to={routes.storage()}>Storage</Link>`
      </p>
    </>
  )
}

export default StoragePage
