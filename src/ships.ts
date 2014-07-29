/**
 * Created by kalebmurphy on 6/19/14.
 */

    /// <reference path="../lib/three.d.ts" />

module Ships {

    export enum ShipClass {Scout, Fighter, Bomber, Corvette, Frigate, Destroyer, Cruiser, Carrier, BattleShip, Dreadnaught, Probe, SpaceStation};

    export interface Ship {

        maxAcceleration: number;
        maxVelocity: number;
        mass: number;
        armorValue: number;
        shipClass: Ships.ShipClass;
        location: THREE.Vector3;
        starSystem: THREE.Vector3;
        mesh: THREE.Mesh;

        buildMesh();

    }
}
