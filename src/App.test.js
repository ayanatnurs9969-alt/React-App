import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the current time', () => {
  render(<App />);

  expect(screen.getByText(/current time/i)).toBeInTheDocument();
  expect(screen.getByText(/\d{1,2}:\d{2}:\d{2}/i)).toBeInTheDocument();
});
