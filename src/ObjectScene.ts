import * as three from 'three'

abstract class ObjectScene {

    protected objects:three.Mesh[] = []
    protected animation:Function|undefined

    abstract animationMananger(key:string):void;
    animate(){
        if(this.animation) this.animation(this)
    }
    getObjects():three.Mesh[]{
        return this.objects
    }
}

export default ObjectScene