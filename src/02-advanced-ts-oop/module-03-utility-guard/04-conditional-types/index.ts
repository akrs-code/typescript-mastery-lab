/**
 * Demonstrates: conditional types
 */
type ExractArrayType<T> = T extends (infer U)[] ? U: T;

type Example1 = ExractArrayType<string[]>;
type Example2 = ExractArrayType<number>;

const ex1: Example1 = "hello";
const ex2: Example2 = 42;

console.log("Example1 (from string[]):", ex1);
console.log("Example1 (plain number):", ex2);

