import { useEffect, useState } from "react";
import { fetchTodos } from "./api/todos";
import type { Todo } from "./api/schema";

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        (async () => {
            try {
                setLoading(true);
                const data = await fetchTodos(10);
                if (!cancelled) setTodos(data);
            } catch (e) {
                if (!cancelled) {
                    // Safe type guard check for the caught error instance
                    setError(e instanceof Error ? e.message : String(e));
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        })();

        // Cleanup function runs if the component unmounts before fetch finish
        return () => {
            cancelled = true;
        };
    }, []);

    // --- UI Render Block ---

    if (loading) return <div style={{ padding: "20px" }}>Loading your tasks...</div>;
    if (error) return <div style={{ padding: "20px", color: "red" }}>Error: {error}</div>;

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>Validated English Todo List</h1>
            <ul style={{ lineHeight: "2" }}>
                {todos.map((todo) => (
                    <li 
                        key={todo.id} 
                        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                    >
                        <strong>[{todo.completed ? "✓" : " "}]</strong> {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}