import { render, screen } from '@testing-library/react';
import App from './App';

test('renders About section heading', () => {
  render(<App />);
  const headings = screen.getAllByText(/About/i);
  expect(headings.length).toBeGreaterThan(0);
});
