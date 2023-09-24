import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import routes from './appRoute'

describe('appRoute', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
  })

  const Wrapper = ({ goto }: { goto: string[] }) => {
    const router = createMemoryRouter(routes, { initialEntries: goto })
    return <RouterProvider router={router} />
  }

  const assertPageIsRoutable = (uri: string) => {
    render(<Wrapper goto={[uri]} />)
    expect(screen.queryByText('Not Found')).not.toBeInTheDocument()
  }

  const assertChartPageIsRoutable = async () => {
    const { getByText } = render(<Wrapper goto={['/chart']} />)
    fireEvent.mouseMove(window, { clientX: 100, clientY: 100 })
    await waitFor(
      () => {
        expect(getByText('x:100, y:100')).toBeInTheDocument()
      },
      { interval: 5000 }
    )
  }

  it('should show exception when the route is not valid', () => {
    render(<Wrapper goto={['/isnotvalid']} />)
    expect(screen.getByText('Not Found')).toBeInTheDocument()
  })

  it('should be able to navigate to valid routes', async () => {
    assertPageIsRoutable('/')
    assertPageIsRoutable('/about')
    await assertChartPageIsRoutable()
  })
})
