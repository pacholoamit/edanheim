import { render } from '@redwoodjs/testing/web'

import ColorSchemeToggle from './ColorSchemeToggle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ColorSchemeToggle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ColorSchemeToggle />)
    }).not.toThrow()
  })
})
