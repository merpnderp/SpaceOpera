/**
 * Created by kalebmurphy on 7/22/14.
 */


/// <reference path="../lib/three.d.ts" />
/// <reference path="GameEngine.ts" />

module Util {

    export interface IGameObject extends THREE.Object3D{
        start?(): void;
        update?():void;
        lateUpdate?(): void;
        position: THREE.Vector3;
    }

    export class GameObject extends THREE.Object3D implements IGameObject{

        constructor() {
            super();
            this.register();
        }

        private register(){
            GameEngine.GetInstance().register(this);
        }

        public destroy(){
            GameEngine.GetInstance().deRegister(this);
        }

    }
    export class GameMesh extends THREE.Mesh {

        constructor() {
            super();
            this.register();
        }

        private register(){
            GameEngine.GetInstance().register(this);
        }

        public destroy(){
            GameEngine.GetInstance().deRegister(this);
        }

    }
}
