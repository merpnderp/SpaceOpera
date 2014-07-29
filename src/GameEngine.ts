/**
 * Created by kalebmurphy on 7/22/14.
 */

    /// <reference path="GameObject.ts" />
    /// <reference path="Renderable.ts" />
    /// <reference path="../lib/three.d.ts" />

module Util {

    export class GameEngine {

        private static _instance:GameEngine;

        private gameObjects:Array<Util.IGameObject> = [];

        private renderer:THREE.WebGLRenderer;

        private camera:THREE.PerspectiveCamera;

        private scenes:Array<Util.Scene>;

        private started:boolean = false;


        constructor() {
        }

        public static GetInstance():GameEngine {
            if (this._instance == null) {
                this._instance = new GameEngine();
            }
            return this._instance;
        }

        private Initialize() {

            var container = document.createElement('div');
            document.body.appendChild(container);

            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setClearColor(0xf0f0f0);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera = new THREE.PerspectiveCamera()
            container.appendChild(this.renderer.domElement);

        }

        public AddScene(scene:Util.Scene) {
            this.scenes.push(scene);
        }

        public Start():void {

            var length:number = this.gameObjects.length;

            for (var i = 0; i < length; i++) {
                this.gameObjects[i].start();
            }

            this.started = true;

        }

        public update():void {

            var length:number = this.gameObjects.length;

            for (var i = 0; i < length; i++) {
                this.gameObjects[i].update();
            }

            for (var i = 0; i < length; i++) {
                this.gameObjects[i].lateUpdate();
            }

            for (var i = 0; i < this.scenes.length; i++) {
                this.renderer.render(this.scenes[i].scene, this.scenes[i].camera);
            }

        }

        public register(obj:Util.IGameObject):void {

            this.gameObjects.push(obj);

            this.scenes[0].scene.add(obj);

            if (this.started) {
                obj.start();
            }

        }

        public deRegister(obj:Util.IGameObject):void {
            this.gameObjects.splice(this.gameObjects.indexOf(obj), 1);

        }
    }
}
