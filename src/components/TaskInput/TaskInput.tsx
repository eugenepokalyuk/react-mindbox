import React, { useState } from 'react';
import { Task } from '../../types';

interface TaskInputProps {
  addTask: (task: Task) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      addTask({ id: Date.now().toString(), title: taskTitle, completed: false });
      setTaskTitle('');
    }
  };

  return (
    <div className="p-4 border-b">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        placeholder="What needs to be done?"
        className="w-full p-2 text-gray-600 placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
};

export default TaskInput;