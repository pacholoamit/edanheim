import { AuthProvider as Provider } from '@redwoodjs/auth'
import { createClient } from '@supabase/supabase-js'

const supabaseClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const AuthProvider: React.FC = ({ children }) => {
  return (
    <Provider client={supabaseClient} type="supabase">
      {children}
    </Provider>
  )
}
export default AuthProvider
