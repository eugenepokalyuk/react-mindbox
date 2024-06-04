import React from 'react';
import { Task } from '../../types/types';

interface TaskItemProps {
    task: Task;
    toggleTaskCompletion: (taskId: string) => void;
    deleteTask: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskCompletion, deleteTask }) => {
    return (
        <li className="flex items-center justify-between p-4">
            <div className="flex items-center w-full">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                    className="mr-3 h-5 w-5 min-w-5 min-h-5 rounded-full text-green-500"
                />
                <span className={`text-lg ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'} break-all`}>
                    {task.title}
                </span>
            </div>
            <button onClick={() => deleteTask(task.id)} className="text-red-500">x</button>
        </li>
    );
};

export default TaskItem;