"use strict";
// this is the simple example of interface.
// interface User {
//     name: string;
//     age: number;
//     email: string;
// }
function addKeyValue(key, value) {
    console.log("addkey: key = " + key + " value = " + value);
}
function updateKeyValue(key, value) {
    console.log("updateKey: key = " + key + " value = " + value);
}
const keyValuePair = addKeyValue;
keyValuePair(33, "Mohammad Bin Qasim.");
keyValuePair2: updateKeyValue;
keyValuePair2(23, "Billy Bowdan");
//# sourceMappingURL=interfaces.js.map