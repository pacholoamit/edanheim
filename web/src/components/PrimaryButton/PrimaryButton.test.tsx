import { render } from '@redwoodjs/testing/web'

import PrimaryButton from './PrimaryButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PrimaryButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrimaryButton />)
    }).not.toThrow()
  })
})
