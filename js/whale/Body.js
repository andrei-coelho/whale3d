import * as three from 'three';
import ObjectScene from "../ObjectScene.js";
const dataAnimationFixed = { toDown: true, steps: 200 };
const stepsArr = [];
stepsArr.push({
    position: {
        x: 0,
        y: 0,
        z: 0
    },
    rotation: {
        x: 0,
        y: 0,
        z: 0
    }
});
const topPositionMesh4 = {
    position: {
        x: 1.84,
        y: 2.16,
        z: 0
    },
    rotation: {
        x: 0,
        y: 0,
        z: 1.71
    }
};
const bottomPositionMesh4 = {
    position: {
        x: 1.83,
        y: 1.87,
        z: 0
    },
    rotation: {
        x: 0,
        y: 0,
        z: 1.4
    }
};
const stepsMesh4 = {
    position: {
        x: (topPositionMesh4.position.x - bottomPositionMesh4.position.x) / dataAnimationFixed.steps,
        y: (topPositionMesh4.position.y - bottomPositionMesh4.position.y) / dataAnimationFixed.steps,
        z: (topPositionMesh4.position.z - bottomPositionMesh4.position.z) / dataAnimationFixed.steps
    },
    rotation: {
        x: (topPositionMesh4.rotation.x - bottomPositionMesh4.rotation.x) / dataAnimationFixed.steps,
        y: (topPositionMesh4.rotation.y - bottomPositionMesh4.rotation.y) / dataAnimationFixed.steps,
        z: (topPositionMesh4.rotation.z - bottomPositionMesh4.rotation.z) / dataAnimationFixed.steps
    },
};
stepsArr.push(stepsMesh4);
const topPositionMesh5 = {
    position: {
        x: 3.78,
        y: 2.43,
        z: 0
    },
    rotation: {
        x: 0,
        y: 0,
        z: 1.71
    }
};
const bottomPositionMesh5 = {
    position: {
        x: 3.67,
        y: 1.43,
        z: 0
    },
    rotation: {
        x: 0,
        y: 0,
        z: 1.28
    }
};
const stepsMesh5 = {
    position: {
        x: (topPositionMesh5.position.x - bottomPositionMesh5.position.x) / dataAnimationFixed.steps,
        y: (topPositionMesh5.position.y - bottomPositionMesh5.position.y) / dataAnimationFixed.steps,
        z: (topPositionMesh5.position.z - bottomPositionMesh5.position.z) / dataAnimationFixed.steps
    },
    rotation: {
        x: (topPositionMesh5.rotation.x - bottomPositionMesh5.rotation.x) / dataAnimationFixed.steps,
        y: (topPositionMesh5.rotation.y - bottomPositionMesh5.rotation.y) / dataAnimationFixed.steps,
        z: (topPositionMesh5.rotation.z - bottomPositionMesh5.rotation.z) / dataAnimationFixed.steps
    },
};
stepsArr.push(stepsMesh5);
const defaultAnimation = (objScene) => {
    const obsMeshs = objScene.getObjects();
    for (let i = 1; i < obsMeshs.length; i++) {
        const element = obsMeshs[i];
        const stepObj = stepsArr[i];
        element.position.x = dataAnimationFixed.toDown ? element.position.x - stepObj.position.x : element.position.x + stepObj.position.x;
        element.position.y = dataAnimationFixed.toDown ? element.position.y - stepObj.position.y : element.position.y + stepObj.position.y;
        element.position.z = dataAnimationFixed.toDown ? element.position.z - stepObj.position.z : element.position.z + stepObj.position.z;
        element.rotation.x = dataAnimationFixed.toDown ? element.rotation.x - stepObj.rotation.x : element.rotation.x + stepObj.rotation.x;
        element.rotation.y = dataAnimationFixed.toDown ? element.rotation.y - stepObj.rotation.y : element.rotation.y + stepObj.rotation.y;
        element.rotation.z = dataAnimationFixed.toDown ? element.rotation.z - stepObj.rotation.z : element.rotation.z + stepObj.rotation.z;
    }
    const objTest = obsMeshs[1];
    if (dataAnimationFixed.toDown && objTest.position.y < bottomPositionMesh4.position.y) {
        dataAnimationFixed.toDown = false;
    }
    if (!dataAnimationFixed.toDown && objTest.position.y > topPositionMesh4.position.y) {
        dataAnimationFixed.toDown = true;
    }
};
class Body extends ObjectScene {
    constructor() {
        super(defaultAnimation);
        const material = new three.MeshLambertMaterial({ color: 0x82355 });
        const geometry1 = new three.CylinderGeometry(1, 1, 2, 20, 1, true);
        const mesh_b1 = new three.Mesh(geometry1, material);
        mesh_b1.position.x = 0.07;
        mesh_b1.rotation.z = -1.55;
        mesh_b1.position.y = 2;
        this.objects.push(mesh_b1);
        const geometry2 = new three.CylinderGeometry(1, 0.7, 2, 20, 1, true);
        const mesh4 = new three.Mesh(geometry2, material);
        mesh4.position.x = topPositionMesh4.position.x;
        mesh4.position.y = topPositionMesh4.position.y;
        mesh4.position.z = topPositionMesh4.position.z;
        mesh4.rotation.x = topPositionMesh4.rotation.x;
        mesh4.rotation.y = topPositionMesh4.rotation.y;
        mesh4.rotation.z = topPositionMesh4.rotation.z;
        this.objects.push(mesh4);
        const geometry3 = new three.CylinderGeometry(0.71, 0.1, 2, 20, 1, true);
        const mesh5 = new three.Mesh(geometry3, material);
        mesh5.position.x = topPositionMesh5.position.x;
        mesh5.position.y = topPositionMesh5.position.y;
        mesh5.position.z = topPositionMesh5.position.z;
        mesh5.rotation.x = topPositionMesh5.rotation.x;
        mesh5.rotation.y = topPositionMesh5.rotation.y;
        mesh5.rotation.z = topPositionMesh5.rotation.z;
        this.objects.push(mesh5);
    }
}
export default Body;
