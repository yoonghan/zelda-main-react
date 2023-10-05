import { render } from '@testing-library/react'
import AuthenticatedAccess from '.'
import {
  AuthenticationContext,
  type Props as AuthenticationProps,
} from '../../context/authentication'

describe('AuthenticatedAccess', () => {
  const renderComponent = ({ error, loggedIn }: AuthenticationProps) => {
    return render(
      <AuthenticationContext.Provider
        value={{
          error,
          loggedIn,
        }}
      >
        <AuthenticatedAccess>
          <>I am authenticated</>
        </AuthenticatedAccess>
      </AuthenticationContext.Provider>
    )
  }

  it('should render component authenticated if logged in', () => {
    const { getByText } = renderComponent({ error: '', loggedIn: true })
    expect(getByText('I am authenticated')).toBeInTheDocument()
  })

  it('should render component correctly', () => {
    const { getByText } = renderComponent({ error: 'Error', loggedIn: false })
    expect(getByText('Not authorized')).toBeInTheDocument()
  })
})
