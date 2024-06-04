import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders app and adds a task', () => {
  render(<App />);

  const input = screen.getByPlaceholderText('What needs to be done?');
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

  expect(screen.getByText('New Task')).toBeInTheDocument();
});

test('toggles task completion', () => {
  render(<App />);

  const input = screen.getByPlaceholderText('What needs to be done?');
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

  const checkboxes = screen.getAllByRole('checkbox');
  fireEvent.click(checkboxes[0]);

  expect(screen.getAllByText('New Task')[0]).toHaveClass('line-through');
});

test('deletes a task', () => {
  render(<App />);

  const input = screen.getByPlaceholderText('What needs to be done?');
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

  const deleteButtons = screen.getAllByText('x');
  fireEvent.click(deleteButtons[0]);

  expect(screen.queryByText('New Task')).not.toBeInTheDocument();
});