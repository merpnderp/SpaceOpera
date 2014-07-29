/**
 * Created by kalebmurphy on 6/19/14.
 */

    /// <reference path="../lib/three.d.ts" />

module Galaxy {

    //http://www.enchantedlearning.com/subjects/astronomy/stars/startypes.shtml
    export enum SunType {O, B, A, F, G, K, M}
    export enum SunSubType {Ia, Ib, II, III, IV, V, VI, VII}

    export enum PlanetType {Rocky, Gas, Earth, Venus}


    export class Planet {
        starSystem:THREE.Vector3;
        location:THREE.Vector3;//This is actually an orbit......
        ringed:boolean;
        planetType:PlanetType;
    }

    export class Sun {
        sunType:SunType;
        sunSubType:SunSubType;
        starSystem:THREE.Vector3;
    }

    export class SolarSystem {

        planets:Array<Planet>;
        sun:Sun;
        starSystem:THREE.Vector3;//Can hold entire galaxy's worth of positions in a 64 bit float

        createSun():Sun {
            this.sun = new Sun();
            return this.sun;
        }

    }

    export class Galaxy {
        seed: number;
        constructor(seed:number){
            this.seed = seed;
        }

    }

}
