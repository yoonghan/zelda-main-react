import { useEffect, useState, useCallback, useRef } from 'react'

const useDistanceCalculator = () => {
  const targetElem = useRef<HTMLDivElement>(null)
  const [globalMouseDistanceFromTarget, setGlobalMouseDistanceFromTarget] =
    useState({ x: 0, y: 0 })

  const registerTarget = useCallback((elem: HTMLDivElement) => {
    targetElem.current = elem
  }, [])

  const getOffset = (): {
    offsetLeft: number
    offsetTop: number
  } => {
    if (targetElem.current !== null) {
      const boundary = targetElem.current?.getBoundingClientRect()
      return {
        offsetLeft: boundary.left,
        offsetTop: boundary.top,
      }
    }
    return {
      offsetLeft: 0,
      offsetTop: 0,
    }
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const targetOffset = getOffset()
      const posX = event.clientX - targetOffset.offsetLeft
      const posY = event.clientY - targetOffset.offsetTop

      setGlobalMouseDistanceFromTarget({
        x: posX,
        y: posY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return {
    globalMouseDistanceFromTarget,
    registerTarget,
  }
}

export default useDistanceCalculator
