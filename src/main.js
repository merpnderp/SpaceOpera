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
//# sourceMappingURL=main.js.map
