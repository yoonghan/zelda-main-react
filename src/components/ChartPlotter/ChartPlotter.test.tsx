import { render } from '@testing-library/react'
import ChartPlotter from '.'

describe('ChartPlotter', () => {
  it('should render chart correctly', () => {
    const { getByRole } = render(
      <ChartPlotter data={[1, 2, 3]} label="Mouse position" />
    )
    expect(getByRole('img')).toBeInTheDocument()
  })
})
