import { fireEvent, render, screen } from '@testing-library/react';
import { Task } from '../../types/types';
import Filters from './Filters';

const tasks: Task[] = [
    { id: '1', title: 'Task 1', completed: false },
    { id: '2', title: 'Task 2', completed: true },
];

test('renders Filters and changes filter', () => {
    const setFilter = jest.fn();
    render(<Filters filter="all" setFilter={setFilter} clearCompletedTasks={jest.fn()} tasks={tasks} />);

    const activeButton = screen.getByText('Active');
    fireEvent.click(activeButton);

    expect(setFilter).toHaveBeenCalledWith('active');
});

test('renders Filters and clears completed tasks', () => {
    const clearCompletedTasks = jest.fn();
    render(<Filters filter="all" setFilter={jest.fn()} clearCompletedTasks={clearCompletedTasks} tasks={tasks} />);

    const clearButton = screen.getByText('Clear completed');
    fireEvent.click(clearButton);

    expect(clearCompletedTasks).toHaveBeenCalled();
});