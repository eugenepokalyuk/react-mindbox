import { fireEvent, render, screen } from '@testing-library/react';
import { Task } from '../../types';
import TaskItem from './TaskItem';

const task: Task = { id: '1', title: 'Task 1', completed: false };

test('renders TaskItem and toggles completion', () => {
    const toggleTaskCompletion = jest.fn();
    render(<TaskItem task={task} toggleTaskCompletion={toggleTaskCompletion} deleteTask={jest.fn()} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(toggleTaskCompletion).toHaveBeenCalledWith(task.id);
});

test('renders TaskItem and deletes task', () => {
    const deleteTask = jest.fn();
    render(<TaskItem task={task} toggleTaskCompletion={jest.fn()} deleteTask={deleteTask} />);

    const deleteButton = screen.getByText('x');
    fireEvent.click(deleteButton);

    expect(deleteTask).toHaveBeenCalledWith(task.id);
});
