// ENUMS explained here.

/**
 *? enums is a way to define a collection related constants.
 *? It allows you to define set of named values that represent specific set of possible options.
 */

/**
 *! for example.
 */
enum Directions {
    TOP,
    RIGHT,
    BOTTOM,
    LEFT
}
let marginUp: Directions = Directions.TOP;
let marginRight: Directions = Directions.RIGHT;
let marginDown: Directions = Directions.BOTTOM;
let marginLeft: Directions = Directions.LEFT;
console.log(marginUp, marginRight, marginDown, marginLeft);


/**
 *! For Example.
 */
enum Color {
    WHITE = "FFF",
    BLACK = "000"
}

const foregroundColor: Color = Color.WHITE;
const backgroundColor: Color = Color.BLACK;
console.log(foregroundColor)
console.log(backgroundColor)