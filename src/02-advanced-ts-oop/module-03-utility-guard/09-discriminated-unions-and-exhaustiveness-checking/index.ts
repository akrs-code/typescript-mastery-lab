/**
 * Demonstrates: discriminated unions and exhaustiveness checking
 */
interface Circle {
    kind: "circle";
    radius: number;
}

interface Rectangle {
    kind: "rectangle";
    height: number;
    width: number;
}

interface Square {
    kind: "square";
    side: number;
}

type Shape = Circle | Rectangle | Square;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;

        case "rectangle":
            return shape.width * shape.height;

        case "square":
            return shape.side * shape.side;

        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }

}

const circle: Circle = { kind: "circle", radius: 5 };
const rectangle: Rectangle = { kind: "rectangle", width: 5, height: 5 };
const square: Square = { kind: "square", side: 5 };

console.log("Circle area:", getArea(circle));
console.log("Rectangle area:", getArea(rectangle));
console.log("Square area:", getArea(square));
