import * as three from "three";
import ObjectScene from "../ObjectScene.js";
import Body from "./Body.js";
import BarbatanaCaudal from "./BarbatanaCaudal.js";

class Whale extends ObjectScene {

    private object_scenes:ObjectScene[] = []

    constructor(){
        super()

        const body = new Body()
        this.object_scenes.push(body)
        this.objects.push(...body.getObjects())

        const barbatanaCaudal = new BarbatanaCaudal()
        this.object_scenes.push(barbatanaCaudal)
        this.objects.push(...barbatanaCaudal.getObjects())
    
    }

    animationMananger(key:string){}

}

export default Whale