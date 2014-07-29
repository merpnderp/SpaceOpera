/**
 * Created by kalebmurphy on 7/22/14.
 */
    /// <reference path="../lib/three.d.ts" />

module Util{

    export enum SceneTypes{
        main= 0
    }


    export class Scene{

        constructor(public name: string, public scene: THREE.Scene, public camera: THREE.PerspectiveCamera){

        }

    }

}
