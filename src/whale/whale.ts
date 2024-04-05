import * as three from "three";
import ObjectScene from "../ObjectScene.js";
import HeadBase from "./HeadBase.js";

class Whale extends ObjectScene {

    private object_scenes:ObjectScene[] = []

    constructor(){
        super()
        const headBase = new HeadBase()
        this.object_scenes.push(headBase)
        this.objects.push(headBase.getObjects()[0])
    }

    animationMananger(key:string){}

}

export default Whale