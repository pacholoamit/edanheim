import { render } from '@redwoodjs/testing/web'

import AppHeader from './AppHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AppHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppHeader />)
    }).not.toThrow()
  })
})
