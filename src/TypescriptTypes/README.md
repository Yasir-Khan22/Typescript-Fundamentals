# All about Typescript Types again.


## Interfaces

1. An interfaces defines a set of properties and mehtods that object must have.
2. It provides a way to enforce consistency and ensure that objects adhere to specific structure.

```typescript
interface Mammal{
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

    speak(){
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
```


## Enums

1. Enums is a way to define a set/collection of related constant.
2. It allows you to define set of named values that represent specific set possible values.

```typescript
enum Colors {
    WHITE = "fff",
    BLACK = "000",
}

const backGroundColor: Color = background.WHITE;
const foreGroundColor: Color = foreGroundColor.BLACK;

console.log(backGroundColor);
console.log(foreGroundColor);
```

### Tuples

1. Tuples are typed array with pre-defined length and types for each index.
2. Tuples allow each element in the array to be a known type of value.
3. Tuples has fixed number of elements where each elements has it's own types.

```typescript
// simple tuple.
const personalities: [string, number] = ['Yasir', 20];
console.log(personalities) // yasir, 20

// tuples can be destructured.
const employees: [string, string] = ["Zubair", "Faizan"];
const [firstEmployee, secndEmployee] = employees;
console.log(firstEmployee) // Zubair
console.log(secondEmployee) // Fasih

// tuples can be used as function return types.

function getDirections(): [number, number] {
    return [30, 40]
}
console.log(getDirections()) // [30, 40]

let coordinates = getDirections();// [30, 40] 
console.log(coordinates); // [30, 40] 
```


### Null and Undefined
 
1. A variable is `undefined` when it's `uninitialized` it means wheny it's not assgined any value after begin declared. 
2. A variable is `null` if doesn't have any value. Either that variable has a value which is `empty` or either the value doesn't exist.

# More Comming.