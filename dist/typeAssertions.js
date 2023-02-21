"use strict";
// type assertion will go herer.
/** type assertions in typescript is basic technique to tell the compiler about the ***type*** of variable.*/
// let code: any = 123;
// let employeeCode = <Number>code;
// console.log(employeeCode);
// console.log(typeof (employeeCode))
/**
 * ? Type assertions for objects.
 */
// let employee = {};
// employee.name = "yasirKhan" // comipler error: property name does not exist on type {}.
// employee.role = "UX Desginer" // compiler error: property name does not exist on type {}.
/**
 * We may sometimes encounter a circumstance in which we defined an object without any properties. In such case, The compiler will throw an error. Therefore, we can prevent this by applying type assertions for objects.
 */
// interface Person {
//     name: string;
//     role: string;
// }
// let employee = <Person>{};
// employee.name = "Yasir Khan"; // ok
// employee.role = "Front-End Engineer" // ok
// console.log("employee Name", employee.name)
// console.log("employee role ", employee.role)
//# sourceMappingURL=typeAssertions.js.map