import { fireEvent, render, screen } from '@testing-library/react';
import TaskInput from './TaskInput';

test('renders TaskInput and handles task addition', () => {
    const addTask = jest.fn();
    render(<TaskInput addTask={addTask} />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(addTask).toHaveBeenCalledWith({ id: expect.any(String), title: 'New Task', completed: false });
    expect(input).toHaveValue('');
});