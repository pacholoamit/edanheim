import { render } from '@redwoodjs/testing/web'

import AppNavbar from './AppNavbar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AppNavbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppNavbar />)
    }).not.toThrow()
  })
})
