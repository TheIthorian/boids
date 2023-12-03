import * as THREE from 'three';

export class GameScene {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;

    constructor(private readonly document: Document) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.document.body.appendChild(this.renderer.domElement);
    }

    addBox() {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        this.camera.position.z = 5;

        return this;
    }

    render() {
        requestAnimationFrame(() => this.render());
        this.renderer.render(this.scene, this.camera);
    }
}
