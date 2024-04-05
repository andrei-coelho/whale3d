import * as three from 'three';
export default () => {
    const path = new three.Shape();
    path.moveTo(0, 0);
    path.quadraticCurveTo(10, 140, 30, 146);
    const geometria = new three.ShapeGeometry(path);
    const material = new three.MeshLambertMaterial({ color: 0x113096 });
    return new three.Mesh(geometria);
};
