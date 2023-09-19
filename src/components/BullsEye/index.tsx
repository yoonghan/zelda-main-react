import { type CSSProperties, useEffect, useRef } from 'react'
import useDistanceCalculator from './useDistanceCalculator'

interface Props {
  dimension: number
  targetId: string
  debug?: boolean
}

const BullsEye = ({ dimension, targetId, debug }: Props): JSX.Element => {
  const { registerTarget, globalMouseDistanceFromTarget } =
    useDistanceCalculator()
  const targetRef = useRef<HTMLDivElement>()

  useEffect(() => {
    registerTarget(targetRef.current)
  }, [registerTarget])

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
