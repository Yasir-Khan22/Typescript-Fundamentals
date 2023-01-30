"use strict";
// typescript fles goes here
// function printDetail(id: string[] | number) {
//     console.log(`You id is here: ${id}`)
// }
// printDetail(["stringOne", "stringTwo"]);
// // printDetail(30)
function greeting(str) {
    if (Array.isArray(str)) {
        console.log(`hello, ${str.join(" and ")} `);
    }
    else {
        console.log(`welcome Lone Warrior. ${str}`);
    }
}
greeting(["stringOne", "stringTwo"]);
greeting([11, 12, 13]);
//# sourceMappingURL=unionTypes.js.map