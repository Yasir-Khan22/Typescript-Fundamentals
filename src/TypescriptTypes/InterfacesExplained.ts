// here we will discuss all about typescript types.(source: roadmap.sh)
// null and undefined examples

// let s: string;
// console.log(typeof s)

// let n: number;
// Assigned null value
// n = null;
// console.log(typeof n);

/**
 *? An Interface defines the set of properties and methods that the object have.
 *? It provides a way to enforce consistency and ensure that objects adhere to a specific structure.
 */

/**
 *! for example
 */

interface Mammal {
    name: string;
    age: number;
    speak(): void;
}

// blueprint for interface Mammal
class Shark implements Mammal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log("woof")
    }
}
function displayShark(mammal: Mammal) {
    console.log(`My shark name: ${mammal.name}`);
    console.log(`My shark age: ${mammal.age}`);
    mammal.speak()
}

const myMammal: Mammal = new Shark("Whale Shark", 22);
console.log(displayShark(myMammal));