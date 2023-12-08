import { BaseScene } from './base';
import { CubeScene } from './cube';
import { GlitchScene } from './glitch';
import { NormalMapScene } from './normal-map';
import { PixelScene } from './pixels';

export const sceneByType = {
    cube: (document: Document) => new CubeScene(document),
    glitch: (document: Document) => new GlitchScene(document),
    normalMap: (document: Document) => new NormalMapScene(document),
    pixels: (document: Document) => new PixelScene(document),
} as const;

export type SceneMap = typeof sceneByType;
