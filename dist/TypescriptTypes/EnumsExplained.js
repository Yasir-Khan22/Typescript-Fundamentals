"use strict";
// ENUMS explained here.
/**
 *? enums is a way to define a collection related constants.
 *? It allows you to define set of named values that represent specific set of possible options.
 */
/**
 *! for example.
 */
var Directions;
(function (Directions) {
    Directions[Directions["TOP"] = 0] = "TOP";
    Directions[Directions["RIGHT"] = 1] = "RIGHT";
    Directions[Directions["BOTTOM"] = 2] = "BOTTOM";
    Directions[Directions["LEFT"] = 3] = "LEFT";
})(Directions || (Directions = {}));
let marginUp = Directions.TOP;
let marginRight = Directions.RIGHT;
let marginDown = Directions.BOTTOM;
let marginLeft = Directions.LEFT;
console.log(marginUp, marginRight, marginDown, marginLeft);
/**
 *! For Example.
 */
var Color;
(function (Color) {
    Color["WHITE"] = "FFF";
    Color["BLACK"] = "000";
})(Color || (Color = {}));
const foregroundColor = Color.WHITE;
const backgroundColor = Color.BLACK;
console.log(foregroundColor);
console.log(backgroundColor);
//# sourceMappingURL=EnumsExplained.js.map