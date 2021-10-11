import { render, screen } from '@testing-library/react';
import App from './App';

test('shows hello from v2', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello from V2/i);
  expect(textElement).toBeInTheDocument();
});
