/**
 * Props for the Greeting component.
 * @property {string} name - The name to greet.
 */
type GreetingProps = {
    name: string;
}

/**
 * A simple component that renders a greeting message.
 */
export default function Greeting({ name }: GreetingProps) {
    return <h1>Hello, {name}</h1>
}