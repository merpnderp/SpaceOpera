/**
* Created by kalebmurphy on 7/22/14.
*/
/// <reference path="../lib/three.d.ts" />
var Util;
(function (Util) {
    (function (SceneTypes) {
        SceneTypes[SceneTypes["main"] = 0] = "main";
    })(Util.SceneTypes || (Util.SceneTypes = {}));
    var SceneTypes = Util.SceneTypes;

    var Scene = (function () {
        function Scene(name, scene, camera) {
            this.name = name;
            this.scene = scene;
            this.camera = camera;
        }
        return Scene;
    })();
    Util.Scene = Scene;
})(Util || (Util = {}));
//# sourceMappingURL=Renderable.js.map
