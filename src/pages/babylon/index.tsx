import React from "react"
import script from "./script"

export default function Babylon() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  React.useEffect(() => {
    if (!canvasRef.current) {
      return
    }
    script(canvasRef.current, window)
    return () => {}
  }, [canvasRef])

  return (
    <canvas ref={canvasRef} style={{width: '100vw', height: '100vh'}}></canvas>
  )
}
