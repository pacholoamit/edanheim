import { render } from '@redwoodjs/testing/web'

import NavStorageSection from './NavStorageSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavStorageSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavStorageSection />)
    }).not.toThrow()
  })
})
