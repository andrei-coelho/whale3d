import * as three from 'three'

import ObjectScene from "../ObjectScene.js";
import { dataAnimation } from './animationDataType.js';

const dataAnimationFixed = {toDown:true, steps:200 } 

const topPosition:dataAnimation = {
    position:{
        x:4.88,
        y:2.45,
        z:8
    },
    rotation:{
        x:-1.55,
        y:-0.29,
        z:1.57
    }
}

const bottomPosition:dataAnimation = {
    position:{
        x:4.8,
        y:0.81,
        z:8
    },
    rotation:{
        x:-1.55,
        y:0.53,
        z:1.55
    }
}

const stepObj:dataAnimation = {
    position:{
        x: (topPosition.position.x - bottomPosition.position.x) / dataAnimationFixed.steps,
        y: (topPosition.position.y - bottomPosition.position.y) / dataAnimationFixed.steps,
        z: (topPosition.position.z - bottomPosition.position.z) / dataAnimationFixed.steps
    },
    rotation:{
        x: (topPosition.rotation.x - bottomPosition.rotation.x) / dataAnimationFixed.steps,
        y: (topPosition.rotation.y - bottomPosition.rotation.y) / dataAnimationFixed.steps,
        z: (topPosition.rotation.z - bottomPosition.rotation.z) / dataAnimationFixed.steps
    },
}

const statusToDown = true

const defaultAnimation = (objScene:ObjectScene) => {
    
    const obj = objScene.getObjects()[0]

    obj.position.x = dataAnimationFixed.toDown ? obj.position.x - stepObj.position.x : obj.position.x + stepObj.position.x
    obj.position.y = dataAnimationFixed.toDown ? obj.position.y - stepObj.position.y : obj.position.y + stepObj.position.y
    obj.position.z = dataAnimationFixed.toDown ? obj.position.z - stepObj.position.z : obj.position.z + stepObj.position.z
    obj.rotation.x = dataAnimationFixed.toDown ? obj.rotation.x - stepObj.rotation.x : obj.rotation.x + stepObj.rotation.x
    obj.rotation.y = dataAnimationFixed.toDown ? obj.rotation.y - stepObj.rotation.y : obj.rotation.y + stepObj.rotation.y
    obj.rotation.z = dataAnimationFixed.toDown ? obj.rotation.z - stepObj.rotation.z : obj.rotation.z + stepObj.rotation.z

    if(dataAnimationFixed.toDown && obj.position.y < bottomPosition.position.y){
        dataAnimationFixed.toDown = false
        obj.position.x = bottomPosition.position.x
        obj.position.y = bottomPosition.position.y
        obj.position.z = bottomPosition.position.z
        obj.rotation.x = bottomPosition.rotation.x
        obj.rotation.y = bottomPosition.rotation.y
        obj.rotation.z = bottomPosition.rotation.z
    }

    if(!dataAnimationFixed.toDown && obj.position.y > topPosition.position.y){
        dataAnimationFixed.toDown = true
        obj.position.x = topPosition.position.x
        obj.position.y = topPosition.position.y
        obj.position.z = topPosition.position.z
        obj.rotation.x = topPosition.rotation.x
        obj.rotation.y = topPosition.rotation.y
        obj.rotation.z = topPosition.rotation.z
    }

}

class BarbatanaCaudal extends ObjectScene {

    constructor(){
        super(defaultAnimation)
        const material = new three.MeshPhysicalMaterial({color:0x82355, side:three.DoubleSide})
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
        
        const mesh      = new three.Mesh(geometry,material)

        mesh.position.x = topPosition.position.x
        mesh.position.y = topPosition.position.y
        mesh.position.z = topPosition.position.z 
        
        mesh.rotation.x = topPosition.rotation.x
        mesh.rotation.y = topPosition.rotation.y
        mesh.rotation.z = topPosition.rotation.z 

        this.objects.push(mesh)
        
    }

}

export default BarbatanaCaudal