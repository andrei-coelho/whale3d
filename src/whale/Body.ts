import * as three from 'three'
import ObjectScene from "../ObjectScene.js";


class Body extends ObjectScene {

    constructor(){

        super()
        const material = new three.MeshLambertMaterial({color:0x82355})

        const geometry1 = new three.CylinderGeometry(1,1,2,20,1,true)
        const mesh_b1   = new three.Mesh(geometry1,material)
        mesh_b1.rotation.z = -1.55
        mesh_b1.position.y = 2
        this.objects.push(mesh_b1)

        const geometry2 = new three.CylinderGeometry(1,0.7,2,20,1,true)
        const mesh_b2   = new three.Mesh(geometry2,material)
        mesh_b2.rotation.z = 1.55
        mesh_b2.position.y = 2
        mesh_b2.position.x = 1.95
        this.objects.push(mesh_b2)

        const geometry3 = new three.CylinderGeometry(0.71,0.1,2,20,1,true)
        const mesh_b3   = new three.Mesh(geometry3,material)
        mesh_b3.rotation.z = 1.55
        mesh_b3.position.y = 1.95
        mesh_b3.position.x = 3.9
        this.objects.push(mesh_b3)
        

    }

    animationMananger(key: string): void {}

}

export default Body