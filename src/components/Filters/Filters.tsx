import React from 'react';
import { Task } from '../../types';

interface FiltersProps {
    filter: 'all' | 'active' | 'completed';
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
    clearCompletedTasks: () => void;
    tasks: Task[];
}

const Filters: React.FC<FiltersProps> = ({ filter, setFilter, clearCompletedTasks, tasks }) => {
    const activeTasksCount = tasks.filter(task => !task.completed).length;

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-100 border-t space-y-2 sm:space-y-0">
            <span>{`${activeTasksCount} items left`}</span>
            <div className="flex space-x-4">
                <button
                    onClick={() => setFilter('all')}
                    className={`filter-button ${filter === 'all' ? 'selected' : ''}`}
                >
                    All
                </button>
                <button
                    onClick={() => setFilter('active')}
                    className={`filter-button ${filter === 'active' ? 'selected' : ''}`}
                >
                    Active
                </button>
                <button
                    onClick={() => setFilter('completed')}
                    className={`filter-button ${filter === 'completed' ? 'selected' : ''}`}
                >
                    Completed
                </button>
            </div>
            <button onClick={clearCompletedTasks} className="text-red-500">Clear completed</button>
        </div>
    );
};

export default Filters;