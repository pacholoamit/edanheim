import { render } from '@redwoodjs/testing/web'

import StorageProviderCard from './StorageProviderCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StorageProviderCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StorageProviderCard />)
    }).not.toThrow()
  })
})
