import { render } from '@redwoodjs/testing/web'

import CreateStorageModal from './CreateStorageModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreateStorageModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateStorageModal />)
    }).not.toThrow()
  })
})
