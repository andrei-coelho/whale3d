import * as three from 'three';
import ObjectScene from './ObjectScene.js';

interface xyx {
    x?:number,
    y?:number,
    z?:number
}

class SceneHelper {
    
    private scene:three.Scene
    private renderer:three.Renderer
    private camera:three.PerspectiveCamera
    private light:three.Light = new three.HemisphereLight(
        0xffffff, 0x1040f, 2 
    )
    private objects:Map<string,ObjectScene>= new Map()

    constructor (width:number, height:number, to:string="#scene") {
        const renderer = new three.WebGLRenderer()
        renderer.setSize(width,height)
        document.querySelector(to)?.appendChild(renderer.domElement)
        this.camera = new three.PerspectiveCamera(50, width/height)
        this.camera.position.z = 9
        this.camera.position.y = 3
        this.renderer = renderer
        this.scene = new three.Scene()
        this.scene.add(this.light)
    }

    addLight(light:three.Light){
        this.light = light
        this.scene.add(this.light)
    }

    getLight():three.Light{
        return this.light
    }

    addObject(alias:string, object:ObjectScene){
        this.objects.set(alias,object)
        for(const obj of object.getObjects()){
            this.scene.add(obj)
        }
    }

    getScene():three.Scene{
        return this.scene
    }

    getObject(alias:string):ObjectScene|undefined{
        return this.objects.get(alias)
    }
    
    getCamera():three.Camera{
        return this.camera
    }

    setPosCamera(xyz:xyx){
        if(xyz.x) this.camera.position.x = xyz.x 
        if(xyz.y) this.camera.position.y = xyz.y 
        if(xyz.z) this.camera.position.z = xyz.z
    }

    getRenderer():three.Renderer{
        return this.renderer
    }

    renderLoop(){
        setInterval(() => {
            for(const obj of this.objects.values()) obj.animate()
            this.renderer.render(this.scene,this.camera)
        }, 10)
    }

    render(){
        for(const obj of this.objects.values()) obj.animate()
        this.renderer.render(this.scene,this.camera)
    }

}

export default SceneHelper