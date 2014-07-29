/**
* Created by kalebmurphy on 7/22/14.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../lib/three.d.ts" />
/// <reference path="GameEngine.ts" />
var Util;
(function (Util) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        function GameObject() {
            _super.call(this);
            this.register();
        }
        GameObject.prototype.register = function () {
            Util.GameEngine.GetInstance().register(this);
        };

        GameObject.prototype.destroy = function () {
            Util.GameEngine.GetInstance().deRegister(this);
        };
        return GameObject;
    })(THREE.Object3D);
    Util.GameObject = GameObject;
    var GameMesh = (function (_super) {
        __extends(GameMesh, _super);
        function GameMesh() {
            _super.call(this);
            this.register();
        }
        GameMesh.prototype.register = function () {
            Util.GameEngine.GetInstance().register(this);
        };

        GameMesh.prototype.destroy = function () {
            Util.GameEngine.GetInstance().deRegister(this);
        };
        return GameMesh;
    })(THREE.Mesh);
    Util.GameMesh = GameMesh;
})(Util || (Util = {}));
//# sourceMappingURL=GameObject.js.map
