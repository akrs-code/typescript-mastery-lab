/**
 * Demonstrates function types and index signatures in TypeScript interfaces.
 */
interface StringModifier {
    // Function type: A method taking a string and returning a string
    modify: (input: string) => string;

    // Index signature: Allows any number of additional string-keyed properties of any type
    [key: string]: any;
}

const stringOps: StringModifier = {
    modify(input: string): string {
        return input.toUpperCase();
    },
    description: "Converts strings to uppercase",
    version: 1.0
};

console.log(stringOps.modify("hello World")); // Output: HELLO WORLD

// Dynamically adding a property supported by the index signature
stringOps["author"] = "Alice";
console.log(stringOps.author); // Output: Alice

/**
 * Type alias for a binary operation function signature.
 */
type BinaryOperation = (a: number, b: number) => number;

// Implementation matching the function type
const add: BinaryOperation = (x, y) => x + y;

console.log(add(5, 3)); // Output: 8