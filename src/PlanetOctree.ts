/**
 * Created by kalebmurphy on 7/23/14.
 */

    /// <reference path="../lib/three.d.ts" />
    /// <reference path="Planet.ts" />

module SpaceOpera {

    export class PlanetOctree {

        private children:PlanetOctree[] = [];//null,null,null,null,null,null,null,null];

        private corners:THREE.Vector3[];

        private chunk:Chunk;

        private containsGround = false;

        constructor(private center:THREE.Vector3, private halfWidth:number, private level:number, private splitFactor:number, private planet:Planet) {
//            this.assignCorners();

        }

        private isLeafNode():boolean {
            return this.children[0] == undefined;
        }

        public update() {
            if (this.isLeafNode()) {
                if (this.shouldSplit(this.planet.getPlayerPosition())) {
                    this.createChildren();
                } else if (this.chunk == undefined) {
                    this.createChunk();
                }
            } else if (this.shouldUnSplit(this.planet.getPlayerPosition())) {
                this.deleteChildren();
            } else {
                for (var i = 0; i < 8; i++) {
                    this.children[i].update();
                }
            }
        }

        private createChunk() {

//            this.chunk = new Chunk(this.planet);

        }

        private removeChunk() {

        }

        public deleteChildren() {
            for (var i = 0; i < 8; i++) {
                this.children[i].delete();
                delete this.children[i];
            }
        }

        private shouldSplit(point:THREE.Vector3) {

            return this.halfWidth * this.splitFactor < this.planet.getPlayerPosition().distanceTo(this.center);

        }

        private shouldUnSplit(point:THREE.Vector3) {
            return this.halfWidth * this.splitFactor * 1.5 > this.planet.getPlayerPosition().distanceTo(this.center);
        }

        public delete() {
            if (this.isLeafNode()) {
                this.removeChunk();
            } else {
                this.deleteChildren();
            }
        }

        private createChildren() {
            var newOrigin:THREE.Vector3;
            for (var i = 0; i < 8; i++) {
                // Compute new bounding box for this child
                newOrigin = this.center.clone();
                newOrigin.x += this.center.x * (i & 4 ? .5 : -.5);
                newOrigin.y += this.center.y * (i & 2 ? .5 : -.5);
                newOrigin.z += this.center.z * (i & 1 ? .5 : -.5);
                this.children[i] = new PlanetOctree(newOrigin, this.halfWidth * .5, this.level + 1, this.splitFactor, this.planet);
            }
        }

        private getOctantContainingPoint(point:THREE.Vector3):number {
            var oct:number = 0;
            if (point.x >= this.center.x) oct |= 4;
            if (point.y >= this.center.y) oct |= 2;
            if (point.z >= this.center.z) oct |= 1;
            return oct;
        }

        /*
         // Determine which octant of the tree would contain 'point'
         int getOctantContainingPoint(const Vec3& point) const {
         int oct = 0;
         if(point.x >= origin.x) oct |= 4;
         if(point.y >= origin.y) oct |= 2;
         if(point.z >= origin.z) oct |= 1;
         return oct;
         }

          */



        /*        void getPointsInsideBox(const Vec3& bmin, const Vec3& bmax, std::vector<OctreePoint*>& results) {
         // If we're at a leaf node, just see if the current data point is inside
         // the query bounding box
         if(isLeafNode()) {
         if(data!=NULL) {
         const Vec3& p = data->getPosition();
         if(p.x>bmax.x || p.y>bmax.y || p.z>bmax.z) return;
         if(p.x<bmin.x || p.y<bmin.y || p.z<bmin.z) return;
         results.push_back(data);
         }
         } else {
         // We're at an interior node of the tree. We will check to see if
         // the query bounding box lies outside the octants of this node.
         for(int i=0; i<8; ++i) {
         // Compute the min/max corners of this child octant
         Vec3 cmax = children[i]->origin + children[i]->halfDimension;
         Vec3 cmin = children[i]->origin - children[i]->halfDimension;

         // If the query rectangle is outside the child's bounding box,
         // then continue
         if(cmax.x<bmin.x || cmax.y<bmin.y || cmax.z<bmin.z) continue;
         if(cmin.x>bmax.x || cmin.y>bmax.y || cmin.z>bmax.z) continue;

         // At this point, we've determined that this child is intersecting
         // the query bounding box
         children[i]->getPointsInsideBox(bmin,bmax,results);
         }
         }
         }*/
    }
}
