/**
 * Created by kalebmurphy on 7/22/14.
 */

    /// <reference path="../lib/three.d.ts" />
    /// <reference path="GameObject.ts" />
    /// <reference path="Planet.ts" />
    /// <reference path="SurfaceNets.ts" />

module SpaceOpera {

    export class Chunk extends Util.GameMesh {

        public chunkSize:number = 16;

        private bytes: Uint8Array;

//        private newVertices:Array<THREE.Vector3>;

//        private newTriangles:Array<Number>;

//        private newUV:Array<THREE.Vector2> = new Array<THREE.Vector2>();

        private tUnit:Number = 0.25;

        private tStone:THREE.Vector2 = new THREE.Vector2(1, 0);
        private tGrass:THREE.Vector2 = new THREE.Vector2(1, 1);
        private tGrassTop:THREE.Vector2 = new THREE.Vector2(0, 1);

//        private mesh:THREE.Mesh;
//        private col: MeshCollider

//        private faceCount:Number;

        private surfaceNets = new Util.SurfaceNets();


        public chunkX:number;
        public chunkY:number;
        public chunkZ:number;

        public update:boolean = false;

        constructor(private planet:Planet, position:THREE.Vector3, private width:number) {
            super();
            this.position = position;
            this.getVoxels();
        }


        private getVoxels() {

            var testPosition:THREE.Vector3;
            var step = this.width / this.chunkSize;

            this.bytes = new Uint8Array(this.chunkSize * this.chunkSize * this.chunkSize);

            for (var x = 0; x <= this.chunkSize; x++) {
                for (var y = 0; y < this.chunkSize; y++) {
                    for (var z = 0; z < this.chunkSize; z++) {

                        testPosition = new THREE.Vector3(x * step, y * step, z * step);
                        testPosition.addVectors(testPosition, this.position);
                        testPosition.subVectors(testPosition, this.planet.position);

                        if(testPosition.length() < this.planet.radius){
                            this.bytes[x * (this.chunkSize * this.chunkSize) + y * this.chunkSize + z] = 1;
                        }else{
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
       }
    }
}
