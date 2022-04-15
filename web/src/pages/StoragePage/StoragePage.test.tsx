import { render } from '@redwoodjs/testing/web'

import StoragePage from './StoragePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StoragePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StoragePage />)
    }).not.toThrow()
  })
})
