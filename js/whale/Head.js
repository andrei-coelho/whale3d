import ObjectScene from '../ObjectScene.js';
import * as three from 'three';
const basehead = () => {
    const material = new three.MeshLambertMaterial({ color: 0x82355, side: three.DoubleSide });
    const geometry = new three.SphereGeometry(1.5, 38, 10, 2.19, 1.7, 1.2, 1.8);
    const mesh = new three.Mesh(geometry, material);
    mesh.rotation.x = 3.23;
    mesh.rotation.y = -3.14;
    mesh.rotation.z = 1.14;
    mesh.position.x = -1.04;
    mesh.position.y = 2.08;
    mesh.position.z = -0.01;
    mesh.scale.x = 0.69;
    mesh.scale.y = 0.94;
    mesh.scale.z = 0.73;
    return mesh;
};
const headTop = () => {
    const geometry = new three.CylinderGeometry(0.8, 1, 1.5, 20, 1, true);
    const material = new three.MeshLambertMaterial({ color: 0x82355, side: three.DoubleSide });
    const mesh_base = new three.Mesh(geometry, material);
    mesh_base.position.x = -1.34;
    mesh_base.position.y = 2.09;
    mesh_base.rotation.x = 1.49;
    mesh_base.rotation.y = -0.18;
    mesh_base.rotation.z = 1.56;
    return mesh_base;
};
class Head extends ObjectScene {
    constructor() {
        super(() => { });
        const geometry = new three.SphereGeometry(0.8, 32, 16);
        const material = new three.MeshLambertMaterial({ color: 0x82355, side: three.DoubleSide });
        const fucinho = new three.Mesh(geometry, material);
        fucinho.position.x = -0.41;
        fucinho.position.y = 2.04;
        fucinho.scale.x = 2.89;
        fucinho.scale.y = 1.34;
        fucinho.scale.z = 1.4;
        this.objects.push(fucinho);
    }
}
export default Head;
