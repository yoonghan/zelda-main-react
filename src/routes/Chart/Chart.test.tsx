import { fireEvent, render, waitFor } from '@testing-library/react'
import Chart from '.'

describe('Chart', () => {
  it('should render component correctly', async () => {
    const monitorFn = jest.fn()
    const { getByText } = render(
      <Chart monitorEmitter={monitorFn} debug={true} />
    )
    expect(getByText('Webworker monitor')).toBeInTheDocument()
    fireEvent.mouseMove(window, { clientX: 100, clientY: 100 })
    await waitFor(
      () => {
        expect(getByText('x:100, y:100')).toBeInTheDocument()
      },
      { interval: 5000 }
    )
    expect(monitorFn).toHaveBeenCalledWith({ x: 100, y: -100 })
  })
})
