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
//# sourceMappingURL=ships.js.map
