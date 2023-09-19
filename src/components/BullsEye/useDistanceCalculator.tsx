import { useEffect, useState, useCallback } from 'react'

const useDistanceCalculator = () => {
  const [globalMouseDistanceFromTarget, setGlobalMouseDistanceFromTarget] =
    useState({ x: 0, y: 0 })
  const [targetPos, setTargetPos] = useState({
    offsetLeft: 0,
    offsetTop: 0,
  })

  const registerTarget = useCallback((elem: HTMLDivElement) => {
    const boundary = elem.getBoundingClientRect()
    setTargetPos({
      offsetLeft: boundary.left,
      offsetTop: boundary.top,
    })
  }, [])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const posX = event.clientX - targetPos.offsetLeft
      const posY = event.clientY - targetPos.offsetTop

      setGlobalMouseDistanceFromTarget({
        x: posX,
        y: posY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [targetPos])

  return {
    globalMouseDistanceFromTarget,
    registerTarget,
  }
}

export default useDistanceCalculator
