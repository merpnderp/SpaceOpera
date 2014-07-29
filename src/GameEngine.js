/**
* Created by kalebmurphy on 7/22/14.
*/
/// <reference path="GameObject.ts" />
/// <reference path="Renderable.ts" />
/// <reference path="../lib/three.d.ts" />
var Util;
(function (Util) {
    var GameEngine = (function () {
        function GameEngine() {
            this.gameObjects = [];
            this.started = false;
        }
        GameEngine.GetInstance = function () {
            if (this._instance == null) {
                this._instance = new GameEngine();
            }
            return this._instance;
        };

        GameEngine.prototype.Initialize = function () {
            var container = document.createElement('div');
            document.body.appendChild(container);

            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setClearColor(0xf0f0f0);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera = new THREE.PerspectiveCamera();
            container.appendChild(this.renderer.domElement);
        };

        GameEngine.prototype.AddScene = function (scene) {
            this.scenes.push(scene);
        };

        GameEngine.prototype.Start = function () {
            var length = this.gameObjects.length;

            for (var i = 0; i < length; i++) {
                this.gameObjects[i].start();
            }

            this.started = true;
        };

        GameEngine.prototype.update = function () {
            var length = this.gameObjects.length;

            for (var i = 0; i < length; i++) {
                this.gameObjects[i].update();
            }

            for (var i = 0; i < length; i++) {
                this.gameObjects[i].lateUpdate();
            }

            for (var i = 0; i < this.scenes.length; i++) {
                this.renderer.render(this.scenes[i].scene, this.scenes[i].camera);
            }
        };

        GameEngine.prototype.register = function (obj) {
            this.gameObjects.push(obj);

            this.scenes[0].scene.add(obj);

            if (this.started) {
                obj.start();
            }
        };

        GameEngine.prototype.deRegister = function (obj) {
            this.gameObjects.splice(this.gameObjects.indexOf(obj), 1);
        };
        return GameEngine;
    })();
    Util.GameEngine = GameEngine;
})(Util || (Util = {}));
//# sourceMappingURL=GameEngine.js.map
