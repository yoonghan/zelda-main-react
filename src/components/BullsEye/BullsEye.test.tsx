import { fireEvent, render } from '@testing-library/react'
import BullsEye from '.'

describe('BullsEye', () => {
  const renderComponent = (debug = false) => {
    return render(
      <BullsEye dimension={200} targetId={'crosshair'} debug={debug} />
    )
  }

  it('should render component correctly', () => {
    const { getByTestId } = renderComponent()
    expect(getByTestId('crosshair')).toHaveAttribute('id', 'crosshair')
  })

  it('should show position if debug is true', () => {
    const { getByText } = renderComponent(true)
    fireEvent.mouseMove(window, { clientX: 100, clientY: 100 })
    expect(getByText('x:100, y:100')).toBeInTheDocument()
  })
})
