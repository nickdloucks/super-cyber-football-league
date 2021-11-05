import { render, screen } from '@testing-library/react';
import App from './App';
import TeamCreator from './components/TeamCreator';

test('renders team creator form', () => {
  render(<App />);
  const SCFLApp = screen.getByText('SCFL App');
  // unfinished
});
