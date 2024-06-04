import React from 'react';
import { Task } from '../../types/types';
import TaskItem from '../TaskItem/TaskItem';

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul className="task-list divide-y divide-gray-200">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          toggleTaskCompletion={toggleTaskCompletion} 
          deleteTask={deleteTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;