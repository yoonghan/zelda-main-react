import { type ReactNode, useCallback } from 'react'
import { AuthenticationConsumer } from '../../context/authentication'
import { css } from '@emotion/css'
import { Box } from '@mui/material'

const AuthenticatedAccess = ({ children }: { children: ReactNode }) => {
  const renderElem = useCallback(
    (loggedIn: boolean) => {
      if (loggedIn) {
        return children
      }

      return (
        <Box>
          <div
            className={css`
              font-size: 2rem;
            `}
          >
            Not authorized
          </div>
        </Box>
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
