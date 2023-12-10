import { BaseScene } from './base';
const { EffectComposer } = require('three/addons/postprocessing/EffectComposer.js');
const { GlitchPass } = require('three/addons/postprocessing/GlitchPass.js');
const { OutputPass } = require('three/addons/postprocessing/OutputPass.js');
const { RenderPass } = require('three/addons/postprocessing/RenderPass.js');

export class GlitchScene extends BaseScene {
    composer: any;

    override initiate() {
        this.composer = new EffectComposer(this.renderer);

        this.composer.addPass(new RenderPass(this.scene, this.camera));

        const glitchPass = new GlitchPass();
        glitchPass.goWild = false;

        this.composer.addPass(glitchPass);

        this.composer.addPass(new OutputPass());
    }

    override getRenderer() {
        return this.composer;
    }
}
