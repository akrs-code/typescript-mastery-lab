type Task = {
    id: string;
    text: string;
    completed: boolean;
};

interface TaskItemProps {
    item: Task; // The prop is named 'item'
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TaskItem({ item, onToggle, onDelete }: TaskItemProps) {
    return (
        <li>
            <span 
                onClick={() => onToggle(item.id)} 
                style={{ textDecoration: item.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
                {item.text}
            </span>
    
            <button onClick={() => onDelete(item.id)} style={{ marginLeft: '10px' }}>
                Delete
            </button>
        </li>
    );
}