import { coloring, writeData } from '.'

describe('PlotterHelper', () => {
  const mockWarn = () => {
    const mockWarnFn = jest.fn()
    jest.spyOn(console, 'warn').mockImplementation(mockWarnFn)
    return mockWarnFn
  }

  it('should handle empty data', () => {
    const mockWarnFn = mockWarn()
    const result = writeData([], [])
    expect(result).toStrictEqual({ datasets: [], labels: [] })
    expect(mockWarnFn).toBeCalledWith('data is empty or data(0) != labels(0).')
  })

  it('should handle incorrect data vs label length', () => {
    const mockWarnFn = mockWarn()
    const result = writeData([], ['1', '2'])
    expect(result).toStrictEqual({ datasets: [], labels: [] })
    expect(mockWarnFn).toBeCalledWith('data is empty or data(0) != labels(2).')
  })

  it('should write correct input values', () => {
    const xDataSet = [0, 1, 2]
    const yDataSet = [0, 3, 4]
    const labels = ['x', 'y']

    const result = writeData([xDataSet, yDataSet], labels)
    expect(result).toStrictEqual({
      datasets: [
        {
          label: 'x',
          data: xDataSet,
          borderColor: coloring[0].border,
          backgroundColor: coloring[0].background,
          borderWidth: 1,
          pointStyle: 'cross',
        },
        {
          label: 'y',
          data: yDataSet,
          borderColor: coloring[1].border,
          backgroundColor: coloring[1].background,
          borderWidth: 1,
          pointStyle: 'cross',
        },
      ],
      labels: ['0', '1', '2'],
    })
  })
})
