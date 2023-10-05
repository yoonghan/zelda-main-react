import { act, render } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import routes from './appRoute'
import { AuthenticationProvider } from '../context/authentication'

describe('appRoute', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
  })

  const Wrapper = ({ goto }: { goto: string[] }) => {
    const router = createMemoryRouter(routes, { initialEntries: goto })
    return (
      <AuthenticationProvider>
        <RouterProvider router={router} />
      </AuthenticationProvider>
    )
  }

  const assertPageIsRoutable = (uri: string) => {
    const { queryByText } = render(<Wrapper goto={[uri]} />)
    expect(queryByText('Not Found')).not.toBeInTheDocument()
  }

  const assertChartPageIsRoutable = async () => {
    const { queryByText } = render(<Wrapper goto={['/chart']} />)
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))
    })
    expect(queryByText('Not Found')).not.toBeInTheDocument()
  }

  it('should show exception when the route is not valid', () => {
    const { getByText } = render(<Wrapper goto={['/isnotvalid']} />)
    expect(getByText('Not Found')).toBeInTheDocument()
  })

  it('should be able to navigate to valid routes', async () => {
    assertPageIsRoutable('/')
    assertPageIsRoutable('/about')
    await assertChartPageIsRoutable()
  })
})
