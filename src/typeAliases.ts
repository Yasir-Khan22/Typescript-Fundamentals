type functionTypes = number | string;
let variable: string;

function displayId(id: functionTypes) {
    try {
        if (typeof id === typeof variable) {
            return "here is my id" + id;
        }
    } catch (error) {
        console.log("error occured")
        return "This is my id " + id.toString();
    }

}

displayId("EtE342")
displayId("543ET3")
displayId(234321)

type Point = {
    x: number,
    y: number
};
function printCoordinates(id: Point) {
    console.log("Cooridnates of x-asix:" + id.x);
    console.log("Cooridnates of y-axis:" + id.y)
}
printCoordinates({ x: 43, y: 34 });