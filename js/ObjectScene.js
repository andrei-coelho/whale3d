class ObjectScene {
    constructor(animation) {
        this.objects = [];
        this.object_scenes = [];
        this.animation = animation;
    }
    animate() {
        this.animation(this);
    }
    getObjects() {
        return this.objects;
    }
    getObjectsScenes() {
        return this.object_scenes;
    }
}
export default ObjectScene;
