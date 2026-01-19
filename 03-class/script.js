import * as THREE from 'three'

//canvas
const canvas = document.querySelector('canvas.webgl')

//sizes
const sizes = {width: 800, height: 600}

//scene
const scene = new THREE.Scene()

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

//object
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)





//renderer
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


//logs
console.log(THREE)


