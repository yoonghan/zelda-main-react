import { fireEvent, render, waitFor } from '@testing-library/react'
import Chart from '.'

describe('Chart', () => {
  it('should render component correctly', async () => {
    const { getByText } = render(<Chart />)
    expect(getByText('Webworker monitor')).toBeInTheDocument()
    fireEvent.mouseMove(window, { clientX: 100, clientY: 100 })
    await waitFor(
      () => {
        expect(getByText('x:100, y:100')).toBeInTheDocument()
      },
      { interval: 5000 }
    )
  })
})
