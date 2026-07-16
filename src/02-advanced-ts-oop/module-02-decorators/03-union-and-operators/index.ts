/**
 * Demonstrates Union Types.
 * Shape can be either a circle or a square.
 */
type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; sideLength: number }

/**
 * Calculates the area of a shape using type narrowing.
 */
function area(shape: Shape): number {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2; // Fixed: area is pi * r^2
    } else {
        return shape.sideLength ** 2;
    }
}

type Employee = { name: string, id: number }
type Manager = { name: string, reports: Employee[] }

type Lead = Employee & Manager;

const lead: Lead = {
    name: "Bob",
    id: 1,
    reports: [{ name: "Alice", id: 2 }]
}

console.log("Lead info", lead);
console.log("Circle area:", area({ kind: "circle", radius: 5 }));
console.log("Square area:", area({ kind: "square", sideLength: 10 }));