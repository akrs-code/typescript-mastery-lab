import React from "react";
import TaskItem from "./TaskItem"; 

type Task = {
    id: string;
    text: string;
    completed: boolean;
};

export interface TaskListProps {
    tasks: Task[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {

    if (tasks.length === 0) {
        return <p>No tasks yet. Add one above!</p>;
    }

    return (
        <ul style={{ listStyleType: "none", padding: 0 }}>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    item={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}