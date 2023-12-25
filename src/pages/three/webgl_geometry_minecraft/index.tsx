import script from './script'
import ThreePage from '../page'

const info = <><a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> - <a href="http://www.minecraft.net/" target="_blank" rel="noopener">minecraft</a> demo. featuring <a href="http://painterlypack.net/" target="_blank" rel="noopener">painterly pack</a><br />(left click: forward, right click: backward)</>
export default ThreePage(script, info)
