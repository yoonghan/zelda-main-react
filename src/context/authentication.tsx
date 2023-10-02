import { type ReactNode, createContext, useEffect, useState } from 'react'
import { auth$ } from '@walcron/zelda-shared-context'

interface Props {
  error: string | undefined
  loggedIn: boolean
}

export const defaultProps: Props = {
  error: undefined,
  loggedIn: false,
}

const AuthenticationContext = createContext(defaultProps)

export const AuthenticationConsumer = AuthenticationContext.Consumer

export const AuthenticationProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [error, setError] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const sub = auth$.subscribe(({ error, sessionToken }) => {
      setError(error)
      setLoggedIn(sessionToken !== null)
    })
    return () => {
      sub.unsubscribe()
    }
  }, [])

  return (
    <AuthenticationContext.Provider
      value={{
        error,
        loggedIn,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
