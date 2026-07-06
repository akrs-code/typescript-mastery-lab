import type { Todo } from "./schema";
import { TodoListSchema } from "./schema";
import { getJsonAxios } from "./http";

// English replacements to make the mock data look more realistic
const englishTitles = [
    "Buy groceries",
    "Clean the kitchen",
    "Finish TypeScript demo",
    "Pay electricity bill",
    "Read a book",
    "Walk the dog",
    "Write project report",
    "Exercise for 30 minutes",
    "Call a friend",
    "Water the plants",
];

/**
 * Fetch from jsonplaceholder, validate, then replace titles with English replacements.
 */
export async function fetchTodos(limit = 10): Promise<Todo[]> {
    const url = `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`;

    // 1. Fetch and immediately run runtime validation using our Zod utility
    const rawTodos = await getJsonAxios(url, TodoListSchema);

    // 2. Map over the validated todos to replace Latin titles with English mock data
    const normalizedTodos = rawTodos.map((todo, index) => {
        // Use the array index modulus (%) to loop safely through our 10 titles
        const customTitle = englishTitles[index % englishTitles.length];
        
        return {
            ...todo,
            title: customTitle
        };
    });

    return normalizedTodos;
}