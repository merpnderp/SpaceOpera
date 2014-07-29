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
//# sourceMappingURL=galaxy.js.map
