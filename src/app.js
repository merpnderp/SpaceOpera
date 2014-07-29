/**
* Created by kalebmurphy on 6/19/14.
*/
/// <reference path="../lib/three.d.ts" />
var Ships;
(function (Ships) {
    (function (ShipClass) {
        ShipClass[ShipClass["Scout"] = 0] = "Scout";
        ShipClass[ShipClass["Fighter"] = 1] = "Fighter";
        ShipClass[ShipClass["Bomber"] = 2] = "Bomber";
        ShipClass[ShipClass["Corvette"] = 3] = "Corvette";
        ShipClass[ShipClass["Frigate"] = 4] = "Frigate";
        ShipClass[ShipClass["Destroyer"] = 5] = "Destroyer";
        ShipClass[ShipClass["Cruiser"] = 6] = "Cruiser";
        ShipClass[ShipClass["Carrier"] = 7] = "Carrier";
        ShipClass[ShipClass["BattleShip"] = 8] = "BattleShip";
        ShipClass[ShipClass["Dreadnaught"] = 9] = "Dreadnaught";
        ShipClass[ShipClass["Probe"] = 10] = "Probe";
        ShipClass[ShipClass["SpaceStation"] = 11] = "SpaceStation";
    })(Ships.ShipClass || (Ships.ShipClass = {}));
    var ShipClass = Ships.ShipClass;
    ;
})(Ships || (Ships = {}));
/**
* Created by kalebmurphy on 6/19/14.
*/
/// <reference path="../lib/three.d.ts" />
var Galaxy;
(function (_Galaxy) {
    //http://www.enchantedlearning.com/subjects/astronomy/stars/startypes.shtml
    (function (SunType) {
        SunType[SunType["O"] = 0] = "O";
        SunType[SunType["B"] = 1] = "B";
        SunType[SunType["A"] = 2] = "A";
        SunType[SunType["F"] = 3] = "F";
        SunType[SunType["G"] = 4] = "G";
        SunType[SunType["K"] = 5] = "K";
        SunType[SunType["M"] = 6] = "M";
    })(_Galaxy.SunType || (_Galaxy.SunType = {}));
    var SunType = _Galaxy.SunType;
    (function (SunSubType) {
        SunSubType[SunSubType["Ia"] = 0] = "Ia";
        SunSubType[SunSubType["Ib"] = 1] = "Ib";
        SunSubType[SunSubType["II"] = 2] = "II";
        SunSubType[SunSubType["III"] = 3] = "III";
        SunSubType[SunSubType["IV"] = 4] = "IV";
        SunSubType[SunSubType["V"] = 5] = "V";
        SunSubType[SunSubType["VI"] = 6] = "VI";
        SunSubType[SunSubType["VII"] = 7] = "VII";
    })(_Galaxy.SunSubType || (_Galaxy.SunSubType = {}));
    var SunSubType = _Galaxy.SunSubType;

    (function (PlanetType) {
        PlanetType[PlanetType["Rocky"] = 0] = "Rocky";
        PlanetType[PlanetType["Gas"] = 1] = "Gas";
        PlanetType[PlanetType["Earth"] = 2] = "Earth";
        PlanetType[PlanetType["Venus"] = 3] = "Venus";
    })(_Galaxy.PlanetType || (_Galaxy.PlanetType = {}));
    var PlanetType = _Galaxy.PlanetType;

    var Planet = (function () {
        function Planet() {
        }
        return Planet;
    })();
    _Galaxy.Planet = Planet;

    var Sun = (function () {
        function Sun() {
        }
        return Sun;
    })();
    _Galaxy.Sun = Sun;

    var SolarSystem = (function () {
        function SolarSystem() {
        }
        SolarSystem.prototype.createSun = function () {
            this.sun = new Sun();
            return this.sun;
        };
        return SolarSystem;
    })();
    _Galaxy.SolarSystem = SolarSystem;

    var Galaxy = (function () {
        function Galaxy(seed) {
            this.seed = seed;
        }
        return Galaxy;
    })();
    _Galaxy.Galaxy = Galaxy;
})(Galaxy || (Galaxy = {}));
/**
* Created by kalebmurphy on 7/22/14.
*/
/// <reference path="../lib/three.d.ts" />
var Util;
(function (Util) {
    var Scene = (function () {
        function Scene(scene, camera) {
            this.scene = scene;
            this.camera = camera;
        }
        return Scene;
    })();
    Util.Scene = Scene;
})(Util || (Util = {}));
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
/**
* Created by kalebmurphy on 7/26/14.
*/
// The MIT License (MIT)
//
// Copyright (c) 2012-2013 Mikola Lysenko
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var Util;
(function (Util) {
    var SurfaceNets = (function () {
        function SurfaceNets() {
            this.cube_edges = new Int32Array(24);
            this.edge_table = new Int32Array(256);
            this.buffer = new Int32Array(4096);
        }
        //Precompute edge table, like Paul Bourke does.
        // This saves a bit of time when computing the centroid of each boundary cell
        SurfaceNets.prototype.constuctor = function () {
            //Initialize the cube_edges table
            // This is just the vertex number of each cube
            var k = 0;
            for (var i = 0; i < 8; ++i) {
                for (var j = 1; j <= 4; j <<= 1) {
                    var p = i ^ j;
                    if (i <= p) {
                        this.cube_edges[k++] = i;
                        this.cube_edges[k++] = p;
                    }
                }
            }

            for (var i = 0; i < 256; ++i) {
                var em = 0;
                for (var j = 0; j < 24; j += 2) {
                    var a = !!(i & (1 << this.cube_edges[j])), b = !!(i & (1 << this.cube_edges[j + 1]));
                    em |= a !== b ? (1 << (j >> 1)) : 0;
                }
                this.edge_table[i] = em;
            }
        };

        SurfaceNets.prototype.buildMesh = function (data, dims) {
            var vertices = [], faces = [], n = 0, x = new Int32Array(3), R = new Int32Array([1, (dims[0] + 1), (dims[0] + 1) * (dims[1] + 1)]), grid = new Float32Array(8), buf_no = 1;

            //Resize buffer if necessary
            if (R[2] * 2 > this.buffer.length) {
                this.buffer = new Int32Array(R[2] * 2);
            }

            for (x[2] = 0; x[2] < dims[2] - 1; ++x[2], n += dims[0], buf_no ^= 1, R[2] = -R[2]) {
                //m is the pointer into the buffer we are going to use.
                //This is slightly obtuse because javascript does not have good support for packed data structures, so we must use typed arrays :(
                //The contents of the buffer will be the indices of the vertices on the previous x/y slice of the volume
                var m = 1 + (dims[0] + 1) * (1 + buf_no * (dims[1] + 1));

                for (x[1] = 0; x[1] < dims[1] - 1; ++x[1], ++n, m += 2)
                    for (x[0] = 0; x[0] < dims[0] - 1; ++x[0], ++n, ++m) {
                        //Read in 8 field values around this vertex and store them in an array
                        //Also calculate 8-bit mask, like in marching cubes, so we can speed up sign checks later
                        var mask = 0, g = 0, idx = n;
                        for (var k = 0; k < 2; ++k, idx += dims[0] * (dims[1] - 2))
                            for (var j = 0; j < 2; ++j, idx += dims[0] - 2)
                                for (var i = 0; i < 2; ++i, ++g, ++idx) {
                                    var p = data[idx];
                                    grid[g] = p;
                                    mask |= (p < 0) ? (1 << g) : 0;
                                }

                        //Check for early termination if cell does not intersect boundary
                        if (mask === 0 || mask === 0xff) {
                            continue;
                        }

                        //Sum up edge intersections
                        var edge_mask = this.edge_table[mask], v = [0.0, 0.0, 0.0], e_count = 0;

                        for (var i = 0; i < 12; ++i) {
                            //Use edge mask to check if it is crossed
                            if (!(edge_mask & (1 << i))) {
                                continue;
                            }

                            //If it did, increment number of edge crossings
                            ++e_count;

                            //Now find the point of intersection
                            var e0 = this.cube_edges[i << 1], e1 = this.cube_edges[(i << 1) + 1], g0 = grid[e0], g1 = grid[e1], t = g0 - g1;
                            if (Math.abs(t) > 1e-6) {
                                t = g0 / t;
                            } else {
                                continue;
                            }

                            for (var j = 0, k = 1; j < 3; ++j, k <<= 1) {
                                var a = e0 & k, b = e1 & k;
                                if (a !== b) {
                                    v[j] += a ? 1.0 - t : t;
                                } else {
                                    v[j] += a ? 1.0 : 0;
                                }
                            }
                        }

                        //Now we just average the edge intersections and add them to coordinate
                        var s = 1.0 / e_count;
                        for (var i = 0; i < 3; ++i) {
                            v[i] = x[i] + s * v[i];
                        }

                        //Add vertex to buffer, store pointer to vertex index in buffer
                        this.buffer[m] = vertices.length;
                        vertices.push(v);

                        for (var i = 0; i < 3; ++i) {
                            //The first three entries of the edge_mask count the crossings along the edge
                            if (!(edge_mask & (1 << i))) {
                                continue;
                            }

                            // i = axes we are point along.  iu, iv = orthogonal axes
                            var iu = (i + 1) % 3, iv = (i + 2) % 3;

                            //If we are on a boundary, skip it
                            if (x[iu] === 0 || x[iv] === 0) {
                                continue;
                            }

                            //Otherwise, look up adjacent edges in buffer
                            var du = R[iu], dv = R[iv];

                            //Remember to flip orientation depending on the sign of the corner.
                            if (mask & 1) {
                                faces.push([this.buffer[m], this.buffer[m - du], this.buffer[m - du - dv], this.buffer[m - dv]]);
                            } else {
                                faces.push([this.buffer[m], this.buffer[m - dv], this.buffer[m - du - dv], this.buffer[m - du]]);
                            }
                        }
                    }
            }

            //All done!  Return the result
            return { vertices: vertices, faces: faces };
        };
        return SurfaceNets;
    })();
    Util.SurfaceNets = SurfaceNets;
})(Util || (Util = {}));
/**
* Created by kalebmurphy on 7/22/14.
*/
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
/**
* Created by kalebmurphy on 7/22/14.
*/
/// <reference path="../lib/three.d.ts" />
/// <reference path="GameObject.ts" />
/// <reference path="Chunk.ts" />
/// <reference path="PlanetOctree.ts" />
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
/// <reference path="../lib/three.d.ts" />
/// <reference path="ships.ts" />
/// <reference path="galaxy.ts" />
/// <reference path="Planet.ts" />
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 20000);
var scene = new THREE.Scene();
var planet = new SpaceOpera.Planet(10, 20, camera, 16, 10, scene);

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xbfd1e5);
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("container").appendChild(renderer.domElement);

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    planet.update();

    render();
}

function render() {
    renderer.render(scene, camera);
}

animate();
