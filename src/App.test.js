import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name and featured Danube projects', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /sunil kumar jain/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'My Danube' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Danube One' })).toBeInTheDocument();
});
