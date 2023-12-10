import { SceneMap, sceneByType } from './example-scenes';

export class App {
    constructor(private readonly document: Document) {}

    public async run(sceneType: keyof SceneMap) {
        const sceneConstructor = sceneByType[sceneType];

        if (!sceneConstructor) {
            throw TypeError(`${sceneType} is not a valid type`);
        }

        const scene = sceneConstructor(this.document);
        scene.addBox().render();

        window.addEventListener('resize', () => {
            scene.resize(window.innerWidth, window.innerHeight);
        });
    }

    public static getSceneTypes() {
        return Object.keys(sceneByType);
    }
}
