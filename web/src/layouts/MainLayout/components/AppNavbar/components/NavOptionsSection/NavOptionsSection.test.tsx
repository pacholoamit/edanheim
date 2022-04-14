import { render } from '@redwoodjs/testing/web'

import NavOptionsSection from './NavOptionsSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavOptionsSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavOptionsSection />)
    }).not.toThrow()
  })
})
