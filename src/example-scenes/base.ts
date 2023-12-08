import * as THREE from 'three';

export abstract class BaseScene {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;

    cubes: THREE.Mesh[];

    constructor(private readonly document: Document) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.document.body.appendChild(this.renderer.domElement);

        this.initiate();

        this.cubes = [];
    }

    protected initiate(): void {}

    public addBox() {
        const cube = this.makeCube();

        this.cubes.push(cube);
        this.scene.add(cube);
        this.camera.position.z = 5;

        return this;
    }

    protected makeCube(): THREE.Mesh {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        return new THREE.Mesh(geometry, material);
    }

    protected tick() {
        for (const cube of this.cubes) {
            cube.rotation.x += 0.002;
            cube.rotation.y += 0.002;
        }
    }

    protected getRenderer() {
        return this.renderer;
    }

    public render() {
        this.tick();
        requestAnimationFrame(() => this.render());
        this.getRenderer().render(this.scene, this.camera);
    }
}
