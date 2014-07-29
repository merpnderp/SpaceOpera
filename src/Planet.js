/**
* Created by kalebmurphy on 7/22/14.
*/
/// <reference path="../lib/three.d.ts" />
/// <reference path="GameObject.ts" />
/// <reference path="Chunk.ts" />
/// <reference path="PlanetOctree.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SpaceOpera;
(function (SpaceOpera) {
    var Planet = (function (_super) {
        __extends(Planet, _super);
        function Planet(distToLoad, distToUnLoad, playerObject, voxelDensity, radius, scene) {
            _super.call(this);
            this.distToLoad = distToLoad;
            this.distToUnLoad = distToUnLoad;
            this.playerObject = playerObject;
            this.voxelDensity = voxelDensity;
            this.radius = radius;
            this.scene = scene;

            this.octTree = new SpaceOpera.PlanetOctree(this.position, this.radius / 2, 0, 10, this);
        }
        Planet.prototype.update = function () {
            this.loadChunks();
        };

        Planet.prototype.getPlayerPosition = function () {
            return this.playerObject.position;
        };

        Planet.prototype.loadChunk = function (position) {
        };

        Planet.prototype.unloadChunk = function (position) {
        };

        Planet.prototype.loadChunks = function () {
            for (var x = 0; x < this.distToLoad; x++) {
            }
        };
        return Planet;
    })(Util.GameObject);
    SpaceOpera.Planet = Planet;
})(SpaceOpera || (SpaceOpera = {}));
//# sourceMappingURL=Planet.js.map
