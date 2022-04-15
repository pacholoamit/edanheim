import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import AuthProvider from 'src/providers/AuthProvider'
import ThemeProvider from 'src/providers/ThemeProvider'
import FatalErrorPage from 'src/pages/FatalErrorPage'

const Providers: React.FC = ({ children }) => {
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <AuthProvider>
          <ThemeProvider>
            <RedwoodApolloProvider>{children}</RedwoodApolloProvider>
          </ThemeProvider>
        </AuthProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}

export default Providers
