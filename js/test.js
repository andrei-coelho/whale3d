import * as THREE from 'three';
import Scene from "./scene.js";
import Whale from "./whale/whale.js"
import { OrbitControls } from './OrbitControls.js'

const sceneObj = new Scene(window.innerWidth,window.innerHeight)
const scene = sceneObj.getScene()
const renderer = sceneObj.getRenderer()
const camera = sceneObj.getCamera()
const light = sceneObj.getLight()

const whale = new Whale()
sceneObj.addObject("whale", whale)

const x3 = new THREEx3({ THREE, OrbitControls, camera, renderer, scene} );
for(const ob of whale.getObjects()){
  x3.add(ob)
}
x3.add(light)
x3.add(camera);

renderer.setAnimationLoop(() => {
  
  x3.tick();

  x3.fps(() => {
    sceneObj.render();
  }); 
  
});