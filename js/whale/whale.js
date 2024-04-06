import ObjectScene from "../ObjectScene.js";
import Body from "./Body.js";
import BarbatanaCaudal from "./BarbatanaCaudal.js";
class Whale extends ObjectScene {
    constructor() {
        super();
        this.object_scenes = [];
        const body = new Body();
        this.object_scenes.push(body);
        this.objects.push(...body.getObjects());
        const barbatanaCaudal = new BarbatanaCaudal();
        this.object_scenes.push(barbatanaCaudal);
        this.objects.push(...barbatanaCaudal.getObjects());
    }
    animationMananger(key) { }
}
export default Whale;
