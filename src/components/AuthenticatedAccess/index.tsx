import { type ReactNode, useCallback } from 'react'
import { AuthenticationConsumer } from '../../context/authentication'
import { css } from '@emotion/css'

const AuthenticatedAccess = ({ children }: { children: ReactNode }) => {
  const renderElem = useCallback(
    (loggedIn: boolean) => {
      if (loggedIn) {
        return children
      }

      return (
        <div
          className={css`
            font-weight: 300;
          `}
        >
          Not authorized
        </div>
      )
    },
    [children]
  )

  return (
    <AuthenticationConsumer>
      {({ loggedIn }) => renderElem(loggedIn)}
    </AuthenticationConsumer>
  )
}

export default AuthenticatedAccess
