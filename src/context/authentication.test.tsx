import {
  AuthenticationConsumer,
  AuthenticationProvider,
  defaultProps,
} from './authentication'
import { render } from '@testing-library/react'

describe('authentication', () => {
  it('should have correct authentication defaults', () => {
    expect(defaultProps.error).toBeUndefined()
    expect(defaultProps.loggedIn).toBeFalsy()
  })

  describe('provider', () => {
    it('should authenticate properly', async () => {
      const { getByText } = render(
        <AuthenticationProvider>
          <AuthenticationConsumer>
            {({ loggedIn }) => <>Logged In: {loggedIn ? 'true' : false}</>}
          </AuthenticationConsumer>
        </AuthenticationProvider>
      )
      expect(getByText('Logged In: true')).toBeInTheDocument()
    })
  })
})
