/**
 * Demonstrates: mapped types and template literal types
 */
interface Person {
    id: number;
    name: string;
    age: number;
    email: string;
}

type ReadonlyPerson = {
    readonly [K in keyof Person]: Person[K];
};

const person: ReadonlyPerson = { id: 1, name: "Alice", age: 24, email: "alice@example.com" };

console.log("ReadonlyPerson", person);

// Optional Properties
type PartialPerson = {
    [K in keyof Person]?: Person[K];
}

const partial: PartialPerson = { name: "Bob" };
console.log("Partial Person: ", partial);


// Template Literal
type EventType = "click" | "focus" | "hover";

type EventHandlerNames = `on${Capitalize<EventType>}`;

const handleClick: EventHandlerNames = "onClick";

console.log("Valid event handler", handleClick);


//Combining Mapped + Template Literal
type EventHandlers = {
    [E in EventType as `on${Capitalize<E>}`]: () => void;
}

const handlers: EventHandlers = {
    onClick: () => console.log("Clicked"),
    onFocus: () => console.log("Focused"),
    onHover: () => console.log("Hoved"),
}

handlers.onClick();
handlers.onFocus();
handlers.onHover();

