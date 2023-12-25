import script from './script'
import ThreePage from '../page'

const info = <>
  <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> - Physically accurate incandescent bulb by <a href="http://clara.io" target="_blank" rel="noopener">Ben Houston</a><br />
  Real world scale: Brick cube is 50 cm in size. Globe is 50 cm in diameter.<br/>
  Reinhard inline tonemapping with real-world light falloff (decay = 2).
</>
export default ThreePage(script, info)
