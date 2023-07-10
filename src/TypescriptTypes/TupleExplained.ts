/**
 * A tuple is typed array with pre-defined length and types for each index.
 * Each element in tuple is known type of value.
 * Tuple has fixed number of elements where each element has it's own types.
 */

/**
 *! for example.
 */


/**
 *? Tuples can be use with destructuring.
 */

// let points: [string, number] = ["33", 25];
// // DESTRUCTURE
// let [x, y] = points;

// console.log(x);
// console.log(y);


/**
 *! Tuples can have optional or rest elements:
 */

// boolean is optional.
// let persons: [string, number, boolean?] = ["zubiar", 30, false];

// (..string[]) is occupying all remaining values.

// let team: [string, ...string[]] = ["John", "Alice", "Bob"];
// console.log(employee)
// console.log(team);

/**
 *! Functions can have also function return types.
 */

function getCoordinates(): [number, number] {
    return [10, 10]
}
console.log(getCoordinates())
let coordinates = getCoordinates();
console.log(coordinates)