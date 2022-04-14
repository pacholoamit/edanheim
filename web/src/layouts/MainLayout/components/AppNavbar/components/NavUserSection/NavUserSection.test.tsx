import { render } from '@redwoodjs/testing/web'

import NavUserSection from './NavUserSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavUserSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavUserSection />)
    }).not.toThrow()
  })
})
