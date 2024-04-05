class ObjectScene {
    constructor() {
        this.objects = [];
    }
    animate() {
        if (this.animation)
            this.animation(this);
    }
    getObjects() {
        return this.objects;
    }
}
export default ObjectScene;
