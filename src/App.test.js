import { render, screen } from '@testing-library/react';
import App from './App';
import TeamCreator from './components/TeamCreator';

test('renders team creator form', () => {
  render(<App />);
  render(<TeamCreator />);
  const formTitle = screen.getByText('Name for new team:');
  expect(formTitle).toBeInTheDocument(); //not pulling from library
});
