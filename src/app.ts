import { GameScene } from './game-scene';

export class App {
    constructor(document: Document) {
        this.run(document);
    }

    private async run(document: Document) {
        new GameScene(document).addBox().render();
    }
}
