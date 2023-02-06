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

interface keyValueProcessor { (key: number, value: string): void; }


function addKeyValue(key: number, value: string): void {
    console.log("addkey: key = " + key + " value = " + value)
}

function updateKeyValue(key: number, value: string): void {
    console.log("updateKey: key = " + key + " value = " + value)
}

const keyValuePair: keyValueProcessor = addKeyValue;

keyValuePair(33, "Mohammad Bin Qasim.")

keyValuePair2: updateKeyValue;

keyValuePair2(23, "Billy Bowdan")