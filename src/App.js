import { useEffect, useState } from 'react';
import useItunesApi from './hooks/useItunesApi';

import ArtistSearch from './components/ArtistSearch';
import PaginatedCardDeck from './components/PaginatedCardDeck';

function App() {
  const [artist, setArtist] = useState('Ed Sheeran');

  const { data, loading, error } = useItunesApi(artist);

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className='App bg-theme-primary min-h-screen'>
      <main className='2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4'>
        <ArtistSearch artist={artist} setArtist={setArtist} />
        <p className='px-4 font-bold text-2xl'>Showing results for {artist}</p>
        {loading && (
          <div className='flex items-center justify-center space-x-2 mt-10'>
            <div className='spinner-border animate-spin inline-block w-12 h-12 border-4 border-theme-accent border-t-theme-primary rounded-full' role='status'>
              <span className='visually-hidden hidden'>Loading...</span>
            </div>
          </div>
        )}
        {error && <div className='mt-10 pl-4'>Artist not found, please try another.</div>}
        {data && <PaginatedCardDeck dataset={data} />}
      </main>
    </div>
  );
}

export default App;
