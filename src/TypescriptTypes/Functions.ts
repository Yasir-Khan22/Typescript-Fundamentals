// functions are core building block of typescript.
// function in typescript can be declared by function declaration syntax or by function expressions syntax.

// function declaration.
function addition(a: string, b: string): string {
    return a + b;
}

console.log(addition("stringOne", "stringTwo"));

// function expression.
function subtraction(a: number, b: number): number {
    return a - b
}
const subtract = subtraction(2, 4);
console.log(subtract)