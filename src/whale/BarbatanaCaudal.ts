import * as three from 'three'

import ObjectScene from "../ObjectScene.js";


class BarbatanaCaudal extends ObjectScene {

    constructor(){
        super()

        const material = new three.MeshLambertMaterial({color:0x82355, side:three.DoubleSide})

        const path = new three.Shape()

        const shape = [
            {action:"move", values:[11,4]},
            {action:"line", values:[11.25,4]},
            {action:"curve", values:[11.25,3.25,12,3.25]},
            {action:"line", values:[12.25,3.25]},
            {action:"curve", values:[12.6,2.8,12.6,2.6]},
            {action:"curve", values:[12.3,2.8,11,2.8]},

            {action:"curve", values:[9.4,2.8,9.4,2.6]},
            {action:"curve", values:[9.4,2.8,9.6,3.25]},
            {action:"curve", values:[10.75,3.10,10.75,4]},
            {action:"line", values:[11,4]},
        ]

        const modify = 3

        for(const s of shape){
            switch (s.action) {
                case "line": path.lineTo(s.values[0] - modify, s.values[1] - modify); break;
                case "move": path.moveTo(s.values[0] - modify, s.values[1] - modify); break;
                case "curve": path.quadraticCurveTo(s.values[0] - modify, s.values[1] - modify, s.values[2] - modify, s.values[3] - modify); break;
                default: break;
            }
        }


        const geometry = new three.ExtrudeGeometry( path,{
            depth:0.01,
            bevelEnabled:true,
            bevelSize:0.1,
            bevelThickness:0.1
        })
        
        const mesh = new three.Mesh(geometry,material)
        mesh.rotation.x = -1.55
        mesh.rotation.z = 1.55

        mesh.position.x = 4.86
        mesh.position.y = 1.77
        mesh.position.z = 8 

        this.objects.push(mesh)
    }

    animationMananger(key: string): void {}

}

export default BarbatanaCaudal