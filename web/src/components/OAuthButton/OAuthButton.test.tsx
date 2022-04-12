import { render } from '@redwoodjs/testing/web'

import OAuthButton from './OAuthButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OAuthButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OAuthButton />)
    }).not.toThrow()
  })
})
