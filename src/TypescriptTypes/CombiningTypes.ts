// Type Union and Type Intersection.

/**
 * In typescript, You can combine types by type Union and type Intersection.
 */

/**
 *! Union Type
 */

/**
 * Union type is used to combine two or more types into a single types that represents all the possible types.
 * It is represented by `|`.
 */

type stringNumber = string | number;

let value: stringNumber = "Hello";
value = 43;
console.log(typeof value)

/**
 * Intersection type is used to intersect two or more types into single types that represents all the properties of that type. 
 * It is represented by `&`.
 */


interface A {
    a: string;
}

interface B {
    b: number
}

type AB = A & B;

let valueOne: AB = { a: "string", b: 43 };

console.log(typeof valueOne)