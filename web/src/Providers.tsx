import { AuthProvider } from '@redwoodjs/auth'
import { createClient } from '@supabase/supabase-js'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { MantineProvider, MantineThemeOverride } from '@mantine/core'

import FatalErrorPage from 'src/pages/FatalErrorPage'

const supabaseClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const mantineTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  primaryColor: 'indigo',
}

const Providers: React.FC = ({ children }) => {
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <AuthProvider client={supabaseClient} type="supabase">
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
