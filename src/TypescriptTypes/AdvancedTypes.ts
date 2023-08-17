// Here advanced types will go.

/**
 * 1. Mapped Types.
 * 2. Conditional Types.
 * 3. Literal Types.
 * 4. Template Literal Types.
 * 5. Recursise Types.
 */


/**
* 1. Mappped types are use a similar syntax to loops, where you iterate over the keys of an existing type and apply a transformation to each property.
 */

type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
}

interface Person {
    name: string;
    age: string
}

const readOnlyPerson: Readonly<Person> = {
    name: "Yasir",
    age: "22"
}

/**
 * ? conditional types. 
 */

/**
 * Recursive Types.
 */
