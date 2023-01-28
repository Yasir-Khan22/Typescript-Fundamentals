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