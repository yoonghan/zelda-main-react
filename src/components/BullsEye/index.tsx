import { useEffect, useRef } from 'react'
import useDistanceCalculator from './useDistanceCalculator'
import { type Position } from './type/position'
import { css } from '@emotion/css'

interface Props {
  dimension: number
  targetId: string
  debug?: boolean
  emitNewPosition: (position: Position) => void
}

const targetColor = 'red'

const BullsEye = ({
  dimension,
  targetId,
  debug,
  emitNewPosition,
}: Props): JSX.Element => {
  const { registerTarget, globalMouseDistanceFromTarget } =
    useDistanceCalculator()
  const targetRef = useRef<HTMLDivElement>()

  useEffect(() => {
    registerTarget(targetRef.current)
  }, [registerTarget])

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

  return (
    <div style={outerStyle}>
      {debug && (
        <span>
          x:{globalMouseDistanceFromTarget.x}, y:
          {globalMouseDistanceFromTarget.y}
        </span>
      )}
      <div
        className={css`
          position: absolute;
          transform: translate(-50%, -50%);
          height: 3px;
          width: 3px;
          background-color: ${targetColor};
          top: 50%;
          left: 50%;

          &:before {
            content: '';
            border: 1px solid ${targetColor};
            width: 30px;
            height: 30px;
            display: block;
            border-radius: 15px;
            top: -15px;
            position: absolute;
            left: -15px;
          }

          &:after {
            content: '';
            border: 1px solid ${targetColor};
            width: 50px;
            height: 50px;
            display: block;
            border-radius: 25px;
            top: -25px;
            position: absolute;
            left: -25px;
          }
        `}
        data-testid={targetId}
        id={targetId}
        ref={targetRef}
      ></div>
    </div>
  )
}

export default BullsEye
