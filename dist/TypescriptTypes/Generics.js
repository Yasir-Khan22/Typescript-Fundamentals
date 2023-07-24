"use strict";
// Generics in typescript.
/**
 * Generics in typescript acts like a placeholder for your data types.
 * Generics is used to work with multiple data types instead of being limited to single data type.
 * Generics is denoted by angle brackets <T>.
*/
function Authentication(val) {
    return val;
}
console.log(Authentication("stringOne")); // correct: stringOne
console.log(Authentication(33)); // correct: 33
function Authorization(arg) {
    return arg;
}
let output = Authorization("stringOne");
//# sourceMappingURL=Generics.js.map