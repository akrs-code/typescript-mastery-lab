/**
 * Demonstrates Utility Types: Partial, Required, and Readonly.
 */
interface User {
    id: number;
    name: string;
    email?: string;
}
// Partial: Allowing updating only some fields
function updateUser(id: number, fields: Partial<User>) {
    console.log("Updating user:", id, "with fields", fields);
}

updateUser(1, { name: "Alice updated" });
updateUser(1, { email: "Alice@gmail.com" });
updateUser(1, { name: "Alice Final", email: "AliceFinal@gmail.com" });


function createUser(user: Required<User>) {
    console.log("Create user: ", user);
}

createUser({ id: 2, name: "Bob", email: "bob@example.com" });

function printUser(user: Readonly<User>) {
    console.log("User Details: ", user);
}

printUser({ id: 3, name: "Charlie", email: "charlie@example.com" });

type FrozenUser = Readonly<Required<User>>;
const frozen: FrozenUser = {
    id:4,
    name: "Diana",
    email: "diana@example.com"
}

console.log("Frozen user (cannot be changed)", frozen);