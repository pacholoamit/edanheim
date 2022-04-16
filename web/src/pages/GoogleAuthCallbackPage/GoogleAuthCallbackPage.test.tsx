import { render } from '@redwoodjs/testing/web'

import GoogleAuthCallbackPage from './GoogleAuthCallbackPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GoogleAuthCallbackPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GoogleAuthCallbackPage />)
    }).not.toThrow()
  })
})
