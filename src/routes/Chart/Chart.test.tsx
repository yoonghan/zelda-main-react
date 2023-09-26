import { fireEvent, render, waitFor } from '@testing-library/react'
import Chart from '.'

describe('Chart', () => {
  it('should render component correctly', async () => {
    const monitorFn = jest.fn()
    const { getByText } = render(
      <Chart monitorEmitter={monitorFn} debug={true} />
    )
    expect(getByText('React monitor')).toBeInTheDocument()
    fireEvent.mouseMove(window, { clientX: 100, clientY: 100 })
    await waitFor(
      () => {
        expect(monitorFn).toHaveBeenCalled()
      },
      { timeout: 500 }
    )
    expect(monitorFn).toHaveBeenCalledWith({ x: 100, y: -100 })
  })
})
