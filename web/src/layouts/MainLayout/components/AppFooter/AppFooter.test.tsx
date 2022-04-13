import { render } from '@redwoodjs/testing/web'

import AppFooter from './AppFooter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AppFooter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppFooter />)
    }).not.toThrow()
  })
})
