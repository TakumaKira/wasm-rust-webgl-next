import React from 'react'

export default function WebGL() {
  const [gl, setGl] = React.useState<WebGLRenderingContext>()
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  const getContext = React.useCallback(() => {
    if (!canvasRef.current) {
      return
    }
    const gl = canvasRef.current.getContext('webgl')
    if (!gl) {
      console.error(new Error('Unable to initialize WebGL. Your browser or machine may not support it.'))
      return
    }
    setGl(gl)
  }, [canvasRef])
  React.useEffect(getContext, [getContext])

  const draw = React.useCallback(() => {
    if (!gl) {
      return
    }
    gl.clearColor(1.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT)
  }, [gl])
  React.useEffect(draw, [draw])

  return (
    <canvas ref={canvasRef} width="640" height="480"></canvas>
  )
}
