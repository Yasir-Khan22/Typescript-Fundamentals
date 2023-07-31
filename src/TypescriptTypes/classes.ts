// Classes

/**
 * Classes in typescript are blue-prints for creating objects which contains methods and properties.
 * It helps in organizing code, promoting code useability and implementing object oriented (OOP) concepts.
 */

// class Animal {
//     name: string;
//     age: string;

//     constructor(name: string, age: string) {
//         this.name = name;
//         this.age = age;
//     }
//     makeSound() {
//         console.log("Animal makes a sound.")
//     }
// }

// const dog = new Animal("librador", "33",);
// console.log(dog)
// console.log(dog.name)
// console.log(dog.age)
// console.log(dog.makeSound())


// class Dog extends Animal {
//     breed: string;
//     constructor(name: string, age: string, breed: string) {
//         super(name, age);
//         this.breed = breed;
//     }

//     makeSound(): void {
//         console.log("Dogs also makes sound.")
//     }

// }
// const DogOne = new Dog("Jimmy", "33", "doberman");
// const DogTwo = new Dog("Fluffy", "22", "librador")

// console.log(DogOne);
// console.log(DogOne.name);
// console.log(DogOne.age);
// console.log(DogOne.makeSound());


export class Message {
    title: string;
    message: string;
    isSent: boolean

    constructor(title: string, message: string) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }
}

const newOne = new Message("Hello", "world");
const secondOne = new Message("Hi!", "buddy")

