import * as THREE from 'three';
import { OrbitControls } from './js/OrbitControls.js'

const camera = new THREE.PerspectiveCamera()
camera.position.y = 3
camera.position.z = 8
camera.position.x = -1
const renderer = new THREE.WebGLRenderer("#scene")
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const scene = new THREE.Scene()

const material = new THREE.LineBasicMaterial({color:0xFFFFFF})
        

const path = new THREE.Shape()
// parte direita
path.moveTo(8.75, 4)
path.quadraticCurveTo(8.6,3.6,8.6, 3)
path.quadraticCurveTo(8.6,2,8,2)
path.quadraticCurveTo(8.2,2.5,8.25,3)
path.quadraticCurveTo(8.6,3.9,8.5,4)
path.lineTo(8.75, 4)

const geometry = new THREE.BufferGeometry( )
geometry.setFromPoints(path.getPoints())

const mesh = new THREE.Line(geometry,material)
mesh.position.x = -10
mesh.position.y = -2

scene.add(mesh)

const x3 = new THREEx3({ THREE, OrbitControls, camera, renderer, scene} );

x3.add(camera);

renderer.setAnimationLoop(() => {
  
  x3.tick();

  x3.fps(() => {
    renderer.render(scene, camera)
  }); 
  
});