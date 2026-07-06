/**
 * Props for the UserCard component.
 * @property {string} name - The name of the user to display.
 */
type UserCardProps = {
    name: string;
}

/**
 * A simple component that displays a user's name in a card-like format.
 */
export default function UserCard({ name }: UserCardProps) {
    return <h1>User: {name}</h1>
}