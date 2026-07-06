import { useState } from "react";

interface TaskFormProps  {
    onAdd: (text: string) => void;
}

export default function TaskForm({ onAdd }: TaskFormProps) {
    const [text, setText] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (!trimmed) return;
        onAdd(trimmed);
        setText("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a task" />
            <button type="submit">Add</button>
        </form>
    )
}