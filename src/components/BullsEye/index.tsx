import { type CSSProperties, useEffect, useRef } from 'react'
import useDistanceCalculator from './useDistanceCalculator'
import { type Position } from './type/position'
import { useWindowListener } from '@yoonghan/walcron-microfrontend-shared'

interface Props {
  dimension: number
  targetId: string
  debug?: boolean
  emitNewPosition: (position: Position) => void
}

const BullsEye = ({
  dimension,
  targetId,
  debug,
  emitNewPosition,
}: Props): JSX.Element => {
  const { registerTarget, globalMouseDistanceFromTarget } =
    useDistanceCalculator()
  const { height: windowHeight, width: windowWidth } = useWindowListener()
  const targetRef = useRef<HTMLDivElement>()

  useEffect(() => {
    registerTarget(targetRef.current)
  }, [registerTarget, windowHeight, windowWidth])

  useEffect(() => {
    queueMicrotask(() => {
      emitNewPosition({
        x: globalMouseDistanceFromTarget.x,
        y: globalMouseDistanceFromTarget.y,
      })
    })
  }, [emitNewPosition, globalMouseDistanceFromTarget])

  const outerStyle = {
    minWidth: dimension,
    minHeight: dimension,
    width: '100%',
    height: '100%',
    position: 'relative' as const,
  }

  const innerStyle: CSSProperties = {
    position: 'absolute' as const,
    transform: 'translate(-50%, -50%)',
    height: 1,
    width: 1,
    backgroundColor: 'red',
    top: '50%',
    left: '50%',
  }

  return (
    <div style={outerStyle}>
      {debug && (
        <span>
          x:{globalMouseDistanceFromTarget.x}, y:
          {globalMouseDistanceFromTarget.y}
        </span>
      )}
      <div
        style={innerStyle}
        data-testid={targetId}
        id={targetId}
        ref={targetRef}
      ></div>
    </div>
  )
}

export default BullsEye
