import Scene from "./scene.js";
import Cubo from "./objtest/cubo.js";
const scene = new Scene(window.innerWidth, window.innerHeight);
scene.addObject('cubo', new Cubo());
scene.renderLoop();
