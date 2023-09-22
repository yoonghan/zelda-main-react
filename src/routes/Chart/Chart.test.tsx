import { render } from '@testing-library/react'
import Chart from '.'

describe('Chart', () => {
  it('should render component correctly', () => {
    const { getByText } = render(<Chart />)
    expect(getByText('Webworker monitor')).toBeInTheDocument()
  })
})
