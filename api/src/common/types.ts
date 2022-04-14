export interface WebSession {
  session: {
    provider_token: string
    access_token: string
    expires_int: number
    expires_at: number
    refresh_token: string
    token_type: string
    user: object
  }
}
