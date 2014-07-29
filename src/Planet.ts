/**
 * Created by kalebmurphy on 7/22/14.
 */
    /// <reference path="../lib/three.d.ts" />
    /// <reference path="GameObject.ts" />
    /// <reference path="Chunk.ts" />
    /// <reference path="PlanetOctree.ts" />

module SpaceOpera {

    export class Planet extends Util.GameObject {

        public data:number[][][];

        public chunk:Util.IGameObject;
        public chunks:Chunk[][][];
        private loadedChunks:Chunk[];
        private voxelData:Uint8Array[][][];

        private octTree: PlanetOctree;

        constructor(public distToLoad:number, public distToUnLoad:number, private playerObject:Util.IGameObject,
                    private voxelDensity: number, public radius: number, public scene: THREE.Scene) {
            super();

            this.octTree = new PlanetOctree(this.position, this.radius/2, 0, 10, this);
        }

        public update() {
            this.loadChunks();
        }

        public getPlayerPosition(): THREE.Vector3{
            return this.playerObject.position;
        }

        private loadChunk(position:THREE.Vector3) {

        }

        private unloadChunk(position:THREE.Vector3) {

        }

        private loadChunks() {

            /*
                During init have planet generate data for first 8 chunks
             */

            for (var x = 0; x < this.distToLoad; x++) {

            }

        }

    }

}
