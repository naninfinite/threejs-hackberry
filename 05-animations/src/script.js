import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

/* 
Animate
*/
//let time = Date.now()
const clock = new THREE.Clock()

const tick = () => {

//console.log('tick')

//time
//const currentTime = Date.now()
//const deltaTime = currentTime - time
//time = currentTime
const elapsedTime = clock.getElapsedTime()


/*console.log(
    'dt:', deltaTime.toFixed(2), 'ms',
    'fps:', (1000 / deltaTime).toFixed(1))
*/

/*console.clear()
console.log(`dt: ${deltaTime.toFixed(2)} ms | fps: ${(1000 / deltaTime).toFixed(1)}`)
*/

//update objects
//mesh.rotation.y += 0.001 * deltaTime
//mesh.rotation.y = clock.getElapsedTime()
/*mesh.rotation.y = clock.getElapsedTime() * Math.cos(elapsedTime)
mesh.rotation.x = clock.getElapsedTime() * Math.sin(elapsedTime)
*/


//render
renderer.render(scene, camera)

//call tick again on the next frame
window.requestAnimationFrame(tick)


}
tick()