import { render } from '@redwoodjs/testing/web'

import DarkModeButton from './DarkModeButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DarkModeButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DarkModeButton />)
    }).not.toThrow()
  })
})
