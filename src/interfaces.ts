// this is the simple example of interface.

// interface User {
//     name: string;
//     age: number;
//     email: string;
// }

// let userOne: User = {
//     name: "yasir",
//     age: 34,
//     email: "abc@gmail.com"
// };

// interface as function type

// interface keyValuePair { (key: number, value: string): void; }


// function addKeyValue(key: number, value: string): void {
//     console.log("addkey: key = " + key + " value = " + value)
// }

// function updateKeyValue(key: number, value: string): void {
//     console.log("updateKey: key = " + key + " value = " + value)
// }

// let keyValueOne: keyValuePair = addKeyValue;
// let keyValueTwo: keyValuePair = updateKeyValue;
// keyValueOne(33, "Mohammad Bin Qasim.")
// keyValueTwo(23, "Billy Bowdan")

// interface for array type.
// specifi for number type.
// interface numList { [index: number]: number }

// let numberArray: numList = [23, 24, 25]
// console.log(numberArray[0])
// console.log(numberArray[1])
// console.log(numberArray[2])

// // specific for string type.
// interface stringList { [index: string]: string }
// let stringArray: stringList = {};
// console.log(stringArray["JS"] = "Javascript");
// console.log(stringArray["TS"] = "Typescript");
// console.log(stringArray)


// interface Employee {
//     empID: number,
//     empAge: number,
//     empDepart?: string
// }


// interface Person extends Employee {
//     readonly isLogged?: boolean;
// }

// const employeeTwo: Person = {
//     empID: 2,
//     empAge: 22,
//     empDepart: "Finance Department"
// }
// const employeeOne: Person = {
//     empID: 1,
//     empAge: 24,
//     isLogged: true
// }

// console.log(employeeOne)
// console.log(employeeTwo)