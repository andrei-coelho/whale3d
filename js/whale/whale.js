import ObjectScene from "../ObjectScene.js";
import HeadBase from "./HeadBase.js";
class Whale extends ObjectScene {
    constructor() {
        super();
        this.object_scenes = [];
        const headBase = new HeadBase();
        this.object_scenes.push(headBase);
        this.objects.push(headBase.getObjects()[0]);
    }
    animationMananger(key) { }
}
export default Whale;
