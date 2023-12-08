import { BaseScene } from './base';
const { EffectComposer } = require('three/addons/postprocessing/EffectComposer.js');
const { OutputPass } = require('three/addons/postprocessing/OutputPass.js');
const { RenderPass } = require('three/addons/postprocessing/RenderPass.js');
const { RenderPixelatedPass } = require('three/addons/postprocessing/RenderPixelatedPass.js');

export class PixelScene extends BaseScene {
    composer: any;

    override initiate() {
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));
        this.composer.addPass(new RenderPixelatedPass(3, this.scene, this.camera));
        this.composer.addPass(new OutputPass());
    }

    override getRenderer() {
        return this.composer;
    }
}
