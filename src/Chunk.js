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
/// <reference path="GameObject.ts" />
/// <reference path="Planet.ts" />
/// <reference path="SurfaceNets.ts" />
var SpaceOpera;
(function (SpaceOpera) {
    var Chunk = (function (_super) {
        __extends(Chunk, _super);
        function Chunk(planet, position, width) {
            _super.call(this);
            this.planet = planet;
            this.width = width;
            this.chunkSize = 16;
            //        private newVertices:Array<THREE.Vector3>;
            //        private newTriangles:Array<Number>;
            //        private newUV:Array<THREE.Vector2> = new Array<THREE.Vector2>();
            this.tUnit = 0.25;
            this.tStone = new THREE.Vector2(1, 0);
            this.tGrass = new THREE.Vector2(1, 1);
            this.tGrassTop = new THREE.Vector2(0, 1);
            //        private mesh:THREE.Mesh;
            //        private col: MeshCollider
            //        private faceCount:Number;
            this.surfaceNets = new Util.SurfaceNets();
            this.update = false;
            this.position = position;
            this.getVoxels();
        }
        Chunk.prototype.getVoxels = function () {
            var testPosition;
            var step = this.width / this.chunkSize;

            this.bytes = new Uint8Array(this.chunkSize * this.chunkSize * this.chunkSize);

            for (var x = 0; x <= this.chunkSize; x++) {
                for (var y = 0; y < this.chunkSize; y++) {
                    for (var z = 0; z < this.chunkSize; z++) {
                        testPosition = new THREE.Vector3(x * step, y * step, z * step);
                        testPosition.addVectors(testPosition, this.position);
                        testPosition.subVectors(testPosition, this.planet.position);

                        if (testPosition.length() < this.planet.radius) {
                            this.bytes[x * (this.chunkSize * this.chunkSize) + y * this.chunkSize + z] = 1;
                        } else {
                            this.bytes[x * (this.chunkSize * this.chunkSize) + y * this.chunkSize + z] = 0;
                        }
                    }
                }
            }

            var obj = this.surfaceNets.buildMesh(this.bytes, [this.chunkSize, this.chunkSize, this.chunkSize]);
            this.geometry = new THREE.Geometry();
            this.geometry.vertices = obj.vertices;
            this.geometry.faces = obj.faces;
            this.geometry.computeFaceNormals();
            this.planet.scene.add(this);
        };
        return Chunk;
    })(Util.GameMesh);
    SpaceOpera.Chunk = Chunk;
})(SpaceOpera || (SpaceOpera = {}));
//# sourceMappingURL=Chunk.js.map
