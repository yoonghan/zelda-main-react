import { render, screen } from '@testing-library/react'
import Root from './root.component'

describe('Root component', () => {
  it('should rendered correctly', () => {
    const { getByText } = render(<Root />)
    expect(
      getByText("Walcron's Microfrontend - Zelda version")
    ).toBeInTheDocument()
    expect(getByText(/Walcron.*2023.*/))
  })

  it('should contain the main class for default settings', () => {
    render(<Root />)
    expect(screen.getByTestId('zelda-main')).toHaveClass('main-container')
  })
})
