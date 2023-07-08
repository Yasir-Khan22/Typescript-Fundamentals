"use strict";
// here we will discuss all about typescript types.(source: roadmap.sh)
// null and undefined examples
// blueprint for interface Mammal
class Shark {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log("woof");
    }
}
function displayShark(mammal) {
    console.log(`My shark name: ${mammal.name}`);
    console.log(`My shark age: ${mammal.age}`);
    mammal.speak();
}
const myMammal = new Shark("Whale Shark", 22);
console.log(displayShark(myMammal));
//# sourceMappingURL=InterfacesExplained.js.map