import { render } from '@redwoodjs/testing/web'

import GoogleDrivePage from './GoogleDrivePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GoogleDrivePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GoogleDrivePage />)
    }).not.toThrow()
  })
})
