import ObjectScene from '../ObjectScene.js';
import * as three from 'three';
const animates = new Map();
animates.set("main", (cubo) => {
    const obj = cubo.getObjects()[0];
    obj.rotation.x += 0.01;
    obj.rotation.y += 0.01;
    obj.rotation.z += 0.05;
});
class Cubo extends ObjectScene {
    constructor() {
        super();
        const material = new three.MeshLambertMaterial();
        const geometria = new three.BoxGeometry();
        this.objects.push(new three.Mesh(geometria, material));
        this.animationMananger("main");
    }
    getObjects() {
        return this.objects;
    }
    animationMananger(key) {
        this.animation = animates.get(key);
    }
}
export default Cubo;
