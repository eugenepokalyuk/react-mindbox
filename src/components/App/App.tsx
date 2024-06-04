import React, { useEffect, useState } from 'react';
import { Task } from '../../types/types';
import Filters from '../Filters/Filters';
import TaskInput from '../TaskInput/TaskInput';
import TaskList from '../TaskList/TaskList';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      console.log('Загруженные задачи:', savedTasks);
      setTasks(JSON.parse(savedTasks));
    } else {
      console.log('Нет сохраненных задач в localStorage.');
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      console.log('Сохранение задач:', tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (taskId: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const clearCompletedTasks = () => {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="app bg-gray-100 min-h-screen flex flex-col items-center pt-10 px-4">
      <h1 className="text-4xl text-red-300 mb-6">todos</h1>
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg">
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={filteredTasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
        <Filters
          filter={filter}
          setFilter={setFilter}
          clearCompletedTasks={clearCompletedTasks}
          tasks={tasks}
        />
      </div>
    </div>
  );
};

export default App;