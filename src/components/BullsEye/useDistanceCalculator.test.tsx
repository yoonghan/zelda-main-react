import { fireEvent, renderHook, act } from '@testing-library/react'
import useDistanceCalculator from './useDistanceCalculator'

describe('useDistanceCalculator', () => {
  const renderCustomHook = () => renderHook(useDistanceCalculator)

  it('should move mouse with initial 0 data', () => {
    const { result } = renderCustomHook()
    fireEvent.mouseMove(window, { clientX: 200, clientY: 200 })
    expect(result.current.globalMouseDistanceFromTarget).toStrictEqual({
      x: 200,
      y: 200,
    })
  })

  const createDivElem = (): HTMLDivElement => {
    return document.createElement('div')
  }

  it('should be able to calculate distance from target', () => {
    const { result } = renderCustomHook()
    const divElem = createDivElem()
    const divSpy = jest.spyOn(divElem, 'getBoundingClientRect')
    divSpy.mockReturnValue({
      left: 200,
      top: 201,
      height: 100,
      width: 100,
      x: 1,
      y: 1,
      bottom: 1,
      right: 1,
      toJSON: () => {},
    })
    act(() => {
      result.current.registerTarget(divElem)
    })
    fireEvent.mouseMove(window, { clientX: 100, clientY: 100 })
    expect(result.current.globalMouseDistanceFromTarget).toStrictEqual({
      x: -100,
      y: -101,
    })
  })
})
