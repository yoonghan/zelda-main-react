import { act, renderHook } from '@testing-library/react'
import { useChartUpdater } from './useChartUpdater'

describe('useChartUpdater', () => {
  it('should be able to provide initial data', () => {
    const { result } = renderHook(useChartUpdater, { initialProps: [1, 2, 3] })
    expect(result.current.data).toStrictEqual([1, 2, 3])
  })

  it('should be able to append data with default value', () => {
    const { result } = renderHook(useChartUpdater)
    expect(result.current.data).toStrictEqual([])
    act(() => {
      result.current.append(4)
    })
    expect(result.current.data).toStrictEqual([4])
  })
})
