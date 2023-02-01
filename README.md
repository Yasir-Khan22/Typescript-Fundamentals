# Typescript Basics

## Typescript is all about ***TYPES***
1. NUMBER
2. STRING
3. BOOLEAN 
4. NULL
5. UNDEFINED
6. VOID (SPECIAL KIND OF TYPE)
7. ANY (DANGEROUS)
8. NEVER 
9. UNKNOWN

## Type annotations for variables.

keywords like **const**, **let**, **var** when we define the variables names with these keywords, we have an option in typescript to add explicitly define ***type*** of the variable. 

```Typescript
// string
const stringOne: string = "YasirKhan" // Here (: string) is type annotation for variables (stringOne).
// number
const numberOne: number = 99; // Here (: number) is type annotation for variables (numberOne). 
// Boolean
const isLoggedIn: boolean = true;
```
# Function Annotations

## Type annotations for function parameters. 
```Typescript
function add(a: string, b: string) { // Here type annotations for function parameter is string.
    return a + b; 
}
console.log(add("stringOne", "stringTwo")) // stringOnestringTwo 


function Add(a: number, b: string) {
    return a, b;
}
console.log(Add(10, "stringThree")) // 10stringThree
```

# Object Types 

```typescript 
function Coordinates(points: {x: number, y: number}) {
    console.log(`The co-ordinates of x-axis:`, points.x);
    console.log(`The co-oridinates of y-axis:`, points.y);}

Coordinates({x: 34, y: 40}) 

// The co-ordinates of x-axis:34
// The co-ordinates of y-axis:40
```
You can also add **optional properties** to object type.

```typescript
function user(obj: {name: string, age: number, email?: string, department?: string}) {
       console.log(`Hi, My name ${name} I'm ${ age } currently working as a Frontend Developer at Graffitechs in ${department}. You can contact me on this ${email}.`)
}
user({name: "yasir"})
```

# Union Types

Typescript allow developers to use new types out of existing one.Union type is a type which is formed by two or more other types with the help of the some **operator**.

```typescript
// here I represented the possible values by string or number by | operator.
 function printID(id: string | number) {
    console.log("Here is your id:", id)
 }
 printID("stringOne") // stringOne
 printID(30) // 30

// another example 
function printDetails(Id: string[] | number) = {
 console.log(id)
}
printDetails(["stringOne", "stringTwo"]) // ["stringOne", "stringTwo"]

function greetings(str: string[] | number) {

    if(Array.isArray(str)) {
      console.log(`Hello, ${str.join(" and " )}`)
    }else {
      console.log("welcome lone traveller " + x)
    }
}

greeting(["stringOne", "stringTwo"]) 
greeting(23) 
```
# Type Aliases 

Type Alias is exactly that - a ***name*** for any type.
In typescript, type aliases give a type a new name.They are similar like interfaces but used to give a new type to primitives. Aliasing doesn't create a new type, but It gives just a new to type.
So summary is Just give another name to the type.

## Creating Normal Type Aliases

```Typescript
type NormalType = string | boolean | number;

const stringValue: NormalType; // assigned type alias for variable stringValue.
stringValue = "stringOne"; // stringOne

const numberValue: NormalType; // assinged type alias for variable numberValue.
numberValue = 99; // 99

const booleanValue: NormalType; // assigned type alias for variable booleanValue.
booleanValue = false; // false 
```


## Creating Type Alaises for functions.

```typescript
type functionTypes = number | string;
let variable: string

function displayId(id: functionTypes) {
 if(typeof id === typeof variable) {
  console.log(`This is my secret ID: ${id}`)
 }else {
  console.log(`here is my ID ${id.toString()}`)
 }
}
displayId("2345E3")
displayId(233221)
```
