import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import userEventw from '@testing-library/user-event';
import App from './App';
import ArtistSearch from './components/ArtistSearch';
import PaginatedCardDeck from './components/PaginatedCardDeck';

test('renders learn react link', async () => {
  render(<App />);
  const title = screen.getByText(/Search for your favorite Artist/i);
  expect(title).toBeInTheDocument();
});

test('on initial render, search button should be disabled', async () => {
  render(<ArtistSearch />);
  expect(await screen.findByRole('button', { name: /Search/i })).toBeDisabled();
});

test('search button should be enabled when value is entered', async () => {
  render(<ArtistSearch artist='Ed Sheeran' />);
  const input = screen.getByPlaceholderText('Ed Sheeran');
  userEvent.type(input, 'Eminem');
  expect(await screen.findByRole('button', { name: /Search/i })).toBeEnabled();
});
