import * as three from 'three'

abstract class ObjectScene {

    protected objects:three.Mesh[] = []
    protected object_scenes:ObjectScene[] = []
    protected animation:Function

    constructor(animation:Function){
        this.animation = animation
    }

    animate(){
        this.animation(this)
    }
    getObjects():three.Mesh[]{
        return this.objects
    }
    getObjectsScenes():ObjectScene[]{
        return this.object_scenes
    }
}

export default ObjectScene