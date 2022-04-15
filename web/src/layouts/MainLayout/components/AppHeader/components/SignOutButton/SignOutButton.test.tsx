import { render } from '@redwoodjs/testing/web'

import SignOutButton from './SignOutButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SignOutButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SignOutButton />)
    }).not.toThrow()
  })
})
