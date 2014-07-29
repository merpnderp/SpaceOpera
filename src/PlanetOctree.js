/**
* Created by kalebmurphy on 7/23/14.
*/
/// <reference path="../lib/three.d.ts" />
/// <reference path="Planet.ts" />
var SpaceOpera;
(function (SpaceOpera) {
    var PlanetOctree = (function () {
        function PlanetOctree(center, halfWidth, level, splitFactor, planet) {
            this.center = center;
            this.halfWidth = halfWidth;
            this.level = level;
            this.splitFactor = splitFactor;
            this.planet = planet;
            this.children = [];
            this.containsGround = false;
            //            this.assignCorners();
        }
        PlanetOctree.prototype.isLeafNode = function () {
            return this.children[0] == undefined;
        };

        PlanetOctree.prototype.update = function () {
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
        };

        PlanetOctree.prototype.createChunk = function () {
            //            this.chunk = new Chunk(this.planet);
        };

        PlanetOctree.prototype.removeChunk = function () {
        };

        PlanetOctree.prototype.deleteChildren = function () {
            for (var i = 0; i < 8; i++) {
                this.children[i].delete();
                delete this.children[i];
            }
        };

        PlanetOctree.prototype.shouldSplit = function (point) {
            return this.halfWidth * this.splitFactor < this.planet.getPlayerPosition().distanceTo(this.center);
        };

        PlanetOctree.prototype.shouldUnSplit = function (point) {
            return this.halfWidth * this.splitFactor * 1.5 > this.planet.getPlayerPosition().distanceTo(this.center);
        };

        PlanetOctree.prototype.delete = function () {
            if (this.isLeafNode()) {
                this.removeChunk();
            } else {
                this.deleteChildren();
            }
        };

        PlanetOctree.prototype.createChildren = function () {
            var newOrigin;
            for (var i = 0; i < 8; i++) {
                // Compute new bounding box for this child
                newOrigin = this.center.clone();
                newOrigin.x += this.center.x * (i & 4 ? .5 : -.5);
                newOrigin.y += this.center.y * (i & 2 ? .5 : -.5);
                newOrigin.z += this.center.z * (i & 1 ? .5 : -.5);
                this.children[i] = new PlanetOctree(newOrigin, this.halfWidth * .5, this.level + 1, this.splitFactor, this.planet);
            }
        };

        PlanetOctree.prototype.getOctantContainingPoint = function (point) {
            var oct = 0;
            if (point.x >= this.center.x)
                oct |= 4;
            if (point.y >= this.center.y)
                oct |= 2;
            if (point.z >= this.center.z)
                oct |= 1;
            return oct;
        };
        return PlanetOctree;
    })();
    SpaceOpera.PlanetOctree = PlanetOctree;
})(SpaceOpera || (SpaceOpera = {}));
//# sourceMappingURL=PlanetOctree.js.map
