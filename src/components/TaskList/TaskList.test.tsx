import { render, screen } from '@testing-library/react';
import { Task } from '../../types/types';
import TaskList from './TaskList';

const tasks: Task[] = [
    { id: '1', title: 'Task 1', completed: false },
    { id: '2', title: 'Task 2', completed: true },
];

test('renders TaskList with tasks', () => {
    render(<TaskList tasks={tasks} toggleTaskCompletion={jest.fn()} deleteTask={jest.fn()} />);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
});