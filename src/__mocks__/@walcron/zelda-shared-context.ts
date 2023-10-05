export const auth$ = {
  subscribe: (callback: any) => {
    const defaultCallbackValue = {
      error: '',
      sessionToken: 'logged in',
    }

    callback(defaultCallbackValue)

    return {
      unsubscribe: jest.fn(),
    }
  },
}
