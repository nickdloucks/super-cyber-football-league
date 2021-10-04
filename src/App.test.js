import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Name for new team/i);
  //expect(linkElement).toBeInTheDocument(); //not pulling from library
});
