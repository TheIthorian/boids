import * as THREE from 'three';
import { BaseScene } from './base';

export class NormalMapScene extends BaseScene {
    override makeCube(): THREE.Mesh {
        const geometry = new THREE.BoxGeometry(1, 1, 1);

        const texture = new THREE.TextureLoader().load('assets/cube_newnormal.jpeg');
        const material = new THREE.MeshNormalMaterial({
            normalMap: texture,
        });

        return new THREE.Mesh(geometry, material);
    }
}
