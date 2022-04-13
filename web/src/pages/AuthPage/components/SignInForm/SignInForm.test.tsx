import { render } from '@redwoodjs/testing/web'

import SignInForm from './SignInForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoginForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SignInForm />)
    }).not.toThrow()
  })
})
