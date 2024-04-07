import * as three from 'three';
const material = new three.MeshStandardMaterial({
    color: 0x049ef4,
    depthTest: true,
    depthWrite: true,
    emissive: 0x000000,
    roughness: 0.415,
    metalness: 1,
});
export default material;
