import ObjectScene from '../ObjectScene.js';
import * as three from 'three';
const generateBarbatana = () => {
    const material = new three.MeshLambertMaterial({ color: 0x82355, side: three.DoubleSide });
    const path = new three.Shape();
    path.moveTo(8.75, 4);
    path.quadraticCurveTo(8.6, 3.6, 8.6, 3);
    path.quadraticCurveTo(8.6, 2, 8, 2);
    path.quadraticCurveTo(8.2, 2.5, 8.25, 3);
    path.quadraticCurveTo(8.6, 3.9, 8.5, 4);
    path.lineTo(8.75, 4);
    const geometry = new three.ExtrudeGeometry(path, {
        depth: 0.01,
        bevelEnabled: true,
        bevelSize: 0.1,
        bevelThickness: 0.1
    });
    return new three.Mesh(geometry, material);
};
class BarbatanasLaterais extends ObjectScene {
    constructor() {
        super(() => { });
        const barbatana_d = generateBarbatana();
        barbatana_d.rotation.x = 0.96;
        barbatana_d.rotation.y = 3.3;
        barbatana_d.rotation.z = 0;
        barbatana_d.position.x = 8.13;
        barbatana_d.position.z = -5;
        barbatana_d.position.y = 0.21;
        this.objects.push(barbatana_d);
        const barbatana_l = generateBarbatana();
        barbatana_l.rotation.x = 2.05;
        barbatana_l.rotation.z = 3.3;
        barbatana_l.rotation.y = 0;
        barbatana_l.position.x = 7.44;
        barbatana_l.position.y = -1.02;
        barbatana_l.position.z = 5.54;
        this.objects.push(barbatana_l);
    }
}
export default BarbatanasLaterais;
