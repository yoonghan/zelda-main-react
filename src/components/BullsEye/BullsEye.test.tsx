import { fireEvent, render } from '@testing-library/react'
import BullsEye from '.'

describe('BullsEye', () => {
  const renderComponent = (debug = false, emitNewPosition = jest.fn()) => {
    return render(
      <BullsEye
        dimension={200}
        targetId={'crosshair'}
        debug={debug}
        emitNewPosition={emitNewPosition}
      />
    )
  }

  it('should render component correctly', () => {
    const { getByTestId } = renderComponent()
    expect(getByTestId('crosshair')).toHaveAttribute('id', 'crosshair')
  })

  it('should emit position and show info if debug is true', async () => {
    const mockPositionEmitter = jest.fn()
    const { findByText } = renderComponent(true, mockPositionEmitter)
    fireEvent.mouseMove(window, { clientX: 100, clientY: 100 })
    expect(await findByText('x:100, y:100')).toBeInTheDocument()
    expect(mockPositionEmitter).toBeCalledWith({ x: 100, y: 100 })
  })
})
