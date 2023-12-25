import React from 'react'
import script from './script'

const divStyle: React.CSSProperties = {
  backgroundColor: '#bfd1e5',
  color: '#61443e',
}

const aStyle = {
  color: '#a06851',
}

const infoStyle: React.CSSProperties = {
  position: 'absolute',
  top: '0px',
  width: '100%',
  padding: '10px',
  boxSizing: 'border-box',
  textAlign: 'center',
  userSelect: 'none',
  pointerEvents: 'none',
  zIndex: 1,
}

export default function WebGLGeometryMinecraft() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    if (!containerRef.current) {
      return
    }
    if (isMounted) {
      return
    }
    setIsMounted(true)
    script(containerRef.current)
    return () => {
      containerRef.current?.childNodes.forEach(childNode => childNode.remove())
    }
  }, [containerRef])

  return (
    <div style={divStyle}>
      <div ref={containerRef}></div>
      <div id="info" style={infoStyle}>
        <a href="https://threejs.org" target="_blank" rel="noopener" style={aStyle}>three.js</a> - <a href="http://www.minecraft.net/" target="_blank" rel="noopener" style={aStyle}>minecraft</a> demo. featuring <a href="http://painterlypack.net/" target="_blank" rel="noopener" style={aStyle}>painterly pack</a>
        <br />
        (left click: forward, right click: backward)
      </div>
    </div>
  )
}
