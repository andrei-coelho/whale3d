import ObjectScene from '../ObjectScene.js';
import * as three from 'three';
const getHorizontalBase = () => {
    const path1 = new three.Shape();
    path1.moveTo(6, 6);
    path1.quadraticCurveTo(6.75, 5.75, 7, 6);
    path1.quadraticCurveTo(7.5, 6.25, 8, 5.75);
    path1.quadraticCurveTo(8.5, 5, 8, 5);
    path1.quadraticCurveTo(7.75, 4.75, 7, 5);
    path1.quadraticCurveTo(5.25, 5.5, 6, 6);
    const geometria = new three.ExtrudeGeometry(path1, {
        depth: 1,
        bevelSize: 0.01,
        bevelThickness: 0.01,
        bevelEnabled: false
    });
    const material = new three.MeshLambertMaterial({ color: 0x31059, });
    const mash1 = new three.Mesh(geometria, material);
    mash1.position.x = -4.09;
    mash1.position.y = -4.77;
    mash1.position.z = 0;
    return mash1;
};
const getVericalBase = () => {
    const path1 = new three.Shape();
    path1.moveTo(3, 10);
    path1.quadraticCurveTo(2, 10, 2.2, 8);
    path1.lineTo(3.8, 8);
    path1.quadraticCurveTo(4, 10, 3, 10);
    const geometria = new three.ExtrudeGeometry(path1, {
        depth: 1,
        bevelSize: 0.01,
        bevelThickness: 0.01,
        bevelEnabled: true
    });
    const material = new three.MeshLambertMaterial({ color: 0x31059, });
    const mash2 = new three.Mesh(geometria, material);
    mash2.position.x = 11.45;
    mash2.position.y = 0.68;
    mash2.position.z = 3.85;
    mash2;
    mash2.rotation.x = -1.54;
    mash2.rotation.y = -0.06;
    mash2.rotation.z = -4.75;
    return mash2;
};
class HeadBase extends ObjectScene {
    constructor() {
        super();
        const mash1 = getHorizontalBase();
        const mash2 = getVericalBase();
        this.objects.push(mash1);
        // this.objects.push(mash2)
    }
    animationMananger(key) {
    }
}
export default HeadBase;
