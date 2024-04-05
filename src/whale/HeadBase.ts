import ObjectScene from '../ObjectScene.js'
import * as three from 'three'


class HeadBase extends ObjectScene {

    constructor(){
        super()

        const path = new three.Shape()
        path.moveTo(6, 6)
        path.quadraticCurveTo(6.75, 5.75, 7, 6)
        path.quadraticCurveTo(7.5, 6.25, 8, 5.75)
        path.quadraticCurveTo(8.5, 5, 8, 5)
        path.quadraticCurveTo(7.75, 4.75,7, 5)
        path.quadraticCurveTo(5.25,5.5,6, 6)

        const geometria = new three.ShapeGeometry(path)
        const material  = new three.MeshLambertMaterial({color:0x113096, })
        const mash = new three.Mesh(geometria, material)
        mash.position.x = -4.09
        mash.position.y = -4.77
        mash.position.z = 0
        this.objects.push(mash)

    }

    animationMananger(key: string): void {
        
    }

}

export default HeadBase