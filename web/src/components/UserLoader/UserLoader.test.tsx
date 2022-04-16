import { render } from '@redwoodjs/testing/web'

import UserLoader from './UserLoader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserLoader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserLoader />)
    }).not.toThrow()
  })
})
