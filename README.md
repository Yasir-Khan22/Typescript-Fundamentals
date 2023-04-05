# Table of Contents
- [Typescript Basics](#typescript-basics)
- [Type Annotations for variables](#type-annotations-for-variables)
- [Function anotations](#function-annotations)
- [Object Types](#object-types)
- [Union Types](#union-types)
- [Type Aliases](#type-aliases)
- [Interface](#interface)
- [Difference between Interface and Type aliases.](#difference-between-interface-and-type-aliases)
- [Type Assertions](#type-assertions)
- [Enums](#enums)
- [What is actually Type Narrowing?](#what-is-actually-type-narrowing)
- [Null and Undefined.](#null-and-undefined)
- [Function anotations](#function-annotations)
- [Less Common Primitives.](#less-common-primitives)
- [More On Functions.](#more-on-functions)


## Typescript Basics
### Typescript is all about ***TYPES***
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

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>


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

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>


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


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

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

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>


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


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>


# Interface

1. Interface is used to define the structure of objects and functions same as type aliases. 
2. In typescript, It is like we are using type aliases here, matter of fact is that it act like we are using an anonymous object here.Typescript only cares about the structure of the values pass to them.
3. If the structure of the functions and objects, then it will generate onspot compile time errors.

```typescript
interface User {
  name: string;
  age: number:
  email: string
}

const userOne: User = {
  name: "yasir",
  age: 22,
  email: "abc@gmail.com"
}
console.log(userOne)
```

## Interface for function type

```typescript
interface keyValuePair { (key: number, value: string): void; }

function addKeyValue(key: number, value: string): void {
    console.log("addkey: key = " + key + " value = " + value)
}

function updateKeyValue(key: number, value: string): void {
    console.log("updateKey: key = " + key + " value = " + value)
}

let keyValueOne: keyValuePair = addKeyValue;
let keyValueTwo: keyValuePair = updateKeyValue;
keyValueOne(33, "Mohammad Bin Qasim.")
keyValueTwo(23, "Billy Bowdan")
```


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>



## Interface for array type.

```typescript
interface numList {[index: number]: number}

let numberArray: numList = [22, 23, 24];
console.log(numberArray[0]) // 22
console.log(numberArray[1]) // 23 
console.log(numberArray[2]) // 24

interface stringlist {[index: string]: string}

let stringString: stringList ={}; 
console.log(stringOne["JS"] = "Javascript") // Javascript
console.log(stringTwo["TS"] = "Typescript") // Typescript
```
## Optional Properties

We can have optional properties ***?*** in interface objects. In such Cases, the objects of the interface will not define these properties.

```typescript
interface Employee {
  empId: number,
  empName: string,
  empDepart?: string // ? optional property
} 

const employeeOne: Employee = {
  empId: 2,
  empName: "Khilji"
}

const employeeTwo: Employee = {
  empId: 3,
  empName: "Saluddin",
  empDepart: "Finance Department"
}

console.log(employeeOne) // ok
console.log(employeeTwo) // ok
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>


## Interface can be extended.

Interfaces can be extended to one or more interfaces. This makes interfaces more flexible or reusable.


```typescript
interface Person {
  name: string;
  gender: string;
}
interface Employee extends Person {
  status: string;
}


let person: Employee = {
  name: "string";
  gender: "Male";
  status: "Ok"
}
```
# Difference between Interface and Type aliases.

|Interface |Type |
|----------|-------|
|An interface declaration always introduces a named object type. |A type alias declaration can introduce a name for any kind of type, including primitive, union, and intersection types.|
|An interface can be named in an extends or implements clause. |Type alias for an object type literal cannot be named in an |extends or implements clause.|
|Interfaces create a new name that is used everywhere. | Type aliases don\'t create a new name.|
|An interface can have multiple merged declarations. | Type alias for an object type literal cannot have multiple merged declarations.|
| It uses the "interface " keyword for declaring an interface that can contain the methods, properties, and events to describe data shapes. | It uses the "type" keyword for creating new type alias not a new type instead of a new name for a type defined.
| interface supports the use of the object. | The type aliases supports only the data types and not the use of an object.
| Interface keyword when used for declaring two interfaces with the same name has the capability to merge these two interfaces. | Type keyword when used for declaring two different types where the variable names declared are same then the typescript compiler will throw an error. 
| The interface cannot be used with other types declaration as done with type in typescript. | the types can be used for other types also such as primitives, unions and tuples.
| The interfaces can be extended withthe type alias or interface can be extended by type also. where interface can easily extend classes is one of the best features of the typescript interface. | In typescript type, or type aliases cannot be extended and hence the type cannot extend class as it does not support this feature.
| in typescript, we cannot create any new intersection interface by combining different types as it does not work in typescript. | In typescript, we can create an intersection type by combining multiple types into a single type and can also create a new intersection type by combining two interfaces using the "&" keyword. 
|Interfaces are most recommended for defining a new objects or method or property of an object where it will receive a specific component. hence interface works better when using objects and method objects. Therefore it is our choice to choose between types or interface according to the program needs. | Types are better used when we create a function which will return an object when the function is called. hence they are more recommended when using functions, complex types, etc. Therefore it left to us to decide what to be used in our programs.
|The interface cannot support this feature as we cannot create a union interface by combining two types. In typescript, interface cannot support the declaration of tuples as it can be done using types. Therefore the interfaces of typescript do not support the computed properties. | In Typescript, union types can contain one or more types using the "|" keyword, where we can have a new union type by combining two interfaces. Similarly, it easy and very helpfull concept for declaring the tuples in typescript using types. Hence we can use type aliases in computed properties using the "in " keyword.
|In Typescript, the interface supports the feature of implementation where it can implement the objects or members of the class from the derived classes. |  In type aliases, type again does not support the feature of implemention where it is only for declaring variables as they cannot implement other types.


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

* * *

# Type Assertions 

- Type assertions in typescript is a technique to tells the compiler not the infer the **TYPE** of the variable.The compiler **on its own** infer the type of the variable. By doing type assertions we can prevent it.
- If we want to change the variable from one type to another such as any to number etc, then we use type assertion.
- We can use angle brackets **<>** or either **as** keyword to do type assertions. The **as** keyword is recommended other then **<>** because in JSX it will create ambiguity.

```Javascript
var foo = {};
foo.bar = 123; // Error: property 'bar' does not exist on `{}`
foo.bas = 'hello'; // Error: property 'bas' does not exist on `{}`
```
Here the code errors because the inferred type of `foo` is `{}` i.e. an object with zero properties. Therefore you are not allowed to add bar or bas to it. You can fix this simply by a type assertion `as Foo`:

## Type assertion for Objects.

We may sometimes encounter a circumstance in which we will defined an object without any initial values, properties. In such cases, the compiler will throw an error. However, We can prevent this by applying type assertions for objects.

```typescript
let person = {};
person.name = "yasir" // Compiler Error: property name does not exist on type {}.
person.role = "ux designer" // Compiler Error: property role does not exist on type {}.
```

```typescript
interface Person {
  name: string
  role: string
}

let employee = <Person> {};
employee.name = "yasir" // ok
employee.role = "ux designer" // ok
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>


# Enums

- Enums also known as enumerations, added into Javascript by Typescript.
- Enums allow use to use and declare a set of named constants i,e that can be numeric or string.
- There are three types of enums
  - Numeric Enum
  - String Enum
  - Heterogeneous Enum

## Numeric Enum

- Numberic enum store string values as number. Numeric enums are alwasy number based enums.

```typescript
enum SocialMedia {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
}
```
- In the above example, `SocialMedia` enum the initial member starts from value `0` and incremented to each member by `1`. You just not only assign seqential values. These enums can have any values. `Yeah`
 
```Typescript
enum SocialMedia {
  Facebook = 20,
  Twitter = 30,
  Instagram = 5,
  LinkedIn = 24
} // ok
```

## String Enum

- The difference is that string enum store `string values` rather than numeric values. 
- String enum offer better `readability` if we have to debug a program then it will be easier to `read` string values as compared to numeric values.

```typescript
enum PrintMeida {
  Jang = "Jang",
  Express = "Express",
  Dawn = "Dawn",
  Tribune = "Tribune"
} // string enum initialized with string values.
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>


# What is actually Type Narrowing?

- Type narrowing is actually a narrow down a general type to more specific and precise one.
- Type narrowing is basically `reducing` the type of `variable` or `expression` based on the surronding text.
- This will allow to be more type specific information to be `inferred` at `compile time`, imporving the overall `type checking` of the code.

```typescript
let x: number | string;
x = 34;

if(typeOf x === "number") {
  console.log(x.toFixed(2)) // ok
  x = "Hello"; // x is now string.
}

console.log(x.toFixed(2)) // error: methods of type number are not assignable to type string.
```

## Narrowing with InstanceOf

The `instanceOf` operator is used to narrow down the object type to a more specific class of interface type. 

```typescript
interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw() {
    console.log("Drawing Circle")
  }
}

class Square implements Shape {
  draw() {
    console.log("Drawing Square")
  }
}


function drawShape(shape: Shape) {
  if(shape instanceOf Circle) {
    shape.draw(); // Drawing Circle
  }
}

drawShape(new Circle()) // ok => Drawing Circle.
drawShape(new Square()) // No result/output.
```

## Narrowing with null and undefined

The Null and undefined types can be used to narrow a union type to a `non-null` or `non-undefined` type. 

```TYPESCRIPT
let y: string | null;
y= 'stringOne';


if(y !== null) {
  console.log(y.toUpperCase()) // ok
  y = null;
}

console.log(y.toUpperCase()) //  Error: y is now possibly null.
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

* * *

# Null and Undefined.

- Javascript has two primitives values for signaling absent, uninitalized or empty values: which is `null` and `Undefined`.
- typescript also provide same type of these values but they are depend on the fact that in `tsconfig.json` the `strickNullChecks` option is enabled or not.

- when `strictNullChecks` is off, the compiler will not check the for `null` and `undefined` values, which will eventually lead to more bugs and exceptions. So it's alwasy recommended, `strictNullChecks` option should be enabled.

```typescript
function doSomethingHere(x: string | null) {
  if(x === null) {
    console.log("If true log the value:", x)
  } else {
    console.log(x.toUpperCase()); 
  }
}

doSomethingHere("stringOne") // STRINONE
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

# Less Common Primitives.

Apart from `string`, `number`, `boolean`, `null` and `undefined`. There are less common primitives also in javavscript, which is `bigInt` and `Symbol`.

## BigInt 

- BigInt in javavascript is used to represent the very large integers. In typescript, you can get  `BigInt` by calling the function `BigInit()` or writing biginit literal by adding an `n` to the end.
- Note: make sure to change the compiler option to `es2020 or later` in tsconfig.json.

```typescript
let integer__One: bigint = BigInt(100); // with function.
let integer__two: bigint = 100n; // with literal.
console.log(integer__One) // 100 
console.log(integer__two) // 100
```

## Symbol

- Symbol is javascript primitive which is used to create unique global reference via function.
- Symbols are unique and immutable.

```typescript
const firstName = Symbol("yasir");
const lastName = Symbol("khan");

if(firstName === lastName) {
  console.log("This condition will return error.") // error 
}
```

<div align="right">
    <em><b><a href="#">↥ back to top</a></b></em>
</div>

* * *

# More On Functions.

- Funcitons are building-block of any programming language.But in javascript, it's more significant. 
- Functional programming in Javascript is used to implement the concepts of object oriented programming like classes, objects, abstraction, and polymorphism etc.

## Named Function.

- The function which is declare and and called by it's name.

```typescript
function displayuserName() {
  console.log("Hello typescript")
}

displayuserName(); // output: Hello typescript
```

## Anonymous Function

- Anonymous Functions are defined as an expression and further stored in a variable.
- The type of function which does not have a name but rather these are stored in a variable.
- These Functions are invoked by calling the name of the variable.

```typescript
let variableOne = function() { // function expression.
  console.log("This function supposed to return the string.")
}

variableOne(); // output: This function supposed to return the string.
```

<div align="right">
    <em><b><a href="#">↥ back to top</a></b></em>
</div>


## Call Signatures

- In javascript, functions are first-class citizens because you can treat them as like any other object. You can assign them to a variable, you can return them from anothe function, you can assign them to another function, also you can assign them to another object, you can assign them properties and read back those propperties etc.
- When you don't want to use function arguments use call signatures.


## Construct Functions

- In Javascript, you can invoke the function the with the `new` keyword (also called a `constructor function`).
- In typescript, you can define those kinds of functions using the construct signature.
- example goes here.

<div align="right">
    <em><b><a href="#">↥ back to top</a></b></em>
</div>

## Generic Functions

- It’s common to write a function where the types of the input relate to the type of the output, or where the types of two inputs are related in some way.
- Generics appears in typescript code inside angle brackets, in the format of `<T>`.

- Take a look at following example:

```javascript
function authentication(auth) {
  return auth;
}
// You can make type-safe in typescript like this:
function authentication<T>(auth: T): T {
  return auth;
}

const result = authentication(123) // ok
```

<div align="right">
    <em><b><a href="#">↥ back to top</a></b></em>
</div>

* * *