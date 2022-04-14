import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { MantineProvider, MantineThemeOverride } from '@mantine/core'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import { Auth0Client } from '@auth0/auth0-spa-js'

const auth0 = new Auth0Client({
  domain: process.env.AUTH0_DOMAIN,
  client_id: process.env.AUTH0_CLIENT_ID,
  redirect_uri: process.env.AUTH0_REDIRECT_URI,
  cacheLocation: 'localstorage',
  audience: process.env.AUTH0_AUDIENCE,
})
const mantineTheme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: 'indigo',
}

const Providers: React.FC = ({ children }) => {
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <AuthProvider client={auth0} type="auth0">
          <MantineProvider
            theme={mantineTheme}
            withNormalizeCSS
            withGlobalStyles
          >
            <RedwoodApolloProvider>{children}</RedwoodApolloProvider>
          </MantineProvider>
        </AuthProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}

export default Providers
