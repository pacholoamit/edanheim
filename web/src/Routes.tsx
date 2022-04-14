// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/'

const Routes = () => {
  return (
    <Router>
      <Route path="/auth" page={AuthPage} name="auth" />
      <Route notfound page={NotFoundPage} />
      <Private unauthenticated={'auth'}>
        <Set wrap={MainLayout}>
          <Route path="/home" page={HomePage} name="home" />
        </Set>
      </Private>
    </Router>
  )
}

export default Routes
