import * as three from "three";
import ObjectScene from "../ObjectScene.js";
import Body from "./Body.js";
import BarbatanaCaudal from "./BarbatanaCaudal.js";
import BarbatanasLaterais from "./BarbatanasLaterais.js";
import Head from "./Head.js";

class Whale extends ObjectScene {

    constructor(){

        super((obj:ObjectScene) => {
            const allobjs = obj.getObjectsScenes()
            for(const o of allobjs){
                o.animate()
            }
        })
     
        const material = new three.MeshLambertMaterial({color:0x82355, side:three.DoubleSide})
        const margeo   = new three.SphereGeometry( 100, 32, 16 );
        const mar      = new three.Mesh(margeo, material)
        this.objects.push(mar)

        const head = new Head()
        this.object_scenes.push(head)
        this.objects.push(...head.getObjects())

        const body = new Body()
        this.object_scenes.push(body)
        this.objects.push(...body.getObjects())

        const barbatanaCaudal = new BarbatanaCaudal()
        this.object_scenes.push(barbatanaCaudal)
        this.objects.push(...barbatanaCaudal.getObjects())

        const barbatanasLaterais = new BarbatanasLaterais()
        this.object_scenes.push(barbatanasLaterais)
        this.objects.push(...barbatanasLaterais.getObjects())
    
    }

}

export default Whale