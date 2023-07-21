"use strict";
// Classes
/**
 * Classes in typescript are blue-prints for creating objects which contains methods and properties.
 * It helps in organizing code, promoting code useability and implementing object oriented (OOP) concepts.
 */
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound() {
        console.log("Animal makes a sound.");
    }
}
const dog = new Animal("librador", "33");
console.log(dog);
console.log(dog.name);
console.log(dog.age);
console.log(dog.makeSound());
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    makeSound() {
        console.log("Dogs also makes sound.");
    }
}
const DogOne = new Dog("Jimmy", "33", "doberman");
const DogTwo = new Dog("Fluffy", "22", "librador");
console.log(DogOne);
console.log(DogOne.name);
console.log(DogOne.age);
console.log(DogOne.makeSound());
//# sourceMappingURL=classes.js.map