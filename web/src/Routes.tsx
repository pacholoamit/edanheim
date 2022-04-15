// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'
import AuthLayout from 'src/layouts/AuthLayout/AuthLayout'

//TODO: Add Loader
const Routes = () => {
  return (
    <Router>
      <Route notfound page={NotFoundPage} />

      <Set wrap={AuthLayout}>
        <Route path="/auth" page={AuthPage} name="auth" />
      </Set>

      <Private unauthenticated={'auth'}>
        <Set wrap={MainLayout}>
          <Route path="/" page={StoragePage} name="storage" />
        </Set>
      </Private>
    </Router>
  )
}

export default Routes
