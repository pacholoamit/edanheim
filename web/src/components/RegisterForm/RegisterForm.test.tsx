import { render } from '@redwoodjs/testing/web'

import RegisterForm from './RegisterForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RegisterForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RegisterForm />)
    }).not.toThrow()
  })
})
