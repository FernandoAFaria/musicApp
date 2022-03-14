import { useState } from 'react';
const ArtistSearch = ({ artist, setArtist }) => {
  const [artistInput, setArtistInput] = useState('');

  const handleFormSubmission = (event) => {
    event.preventDefault();
    if (artistInput.length) setArtist(artistInput);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13 && artistInput.length) {
      //enter key, submit form
      setArtist(artistInput);
    } else {
      setArtistInput(event.target.value);
    }
  };
  return (
    <div>
      <section className='bg-white dark:bg-gray-900 '>
        <div className='mx-auto flex justify-center md:items-center relative'>
          <form id='login' className='w-full sm:w-5/6 md:w-4/6 lg:w-4/12 xl:w-5/12 text-gray-800 my-24 sm:my-12 px-6 sm:px-0' onSubmit={handleFormSubmission}>
            <div className='px-2 flex flex-col items-center justify-center mt-8 sm:mt-0'>
              <h2 className='text-4xl dark:text-gray-100 leading-tight pt-8'>Search for your favorite Artist</h2>
            </div>

            <div className='mt-12 w-full px-2 sm:px-6'>
              <div className='flex flex-row mt-5 '>
                <input
                  placeholder={artist}
                  name='artist'
                  id='artist'
                  onKeyUp={handleKeyPress}
                  className='h-10 px-2 w-9/12 rounded  text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 dark:border-gray-700 dark:focus:border-indigo-600 focus:outline-none focus:border focus:border-indigo-700 border-gray-300 border shadow  rounded-r-none'
                  type='text'
                />
                <button
                  onClick={handleFormSubmission}
                  disabled={!artistInput.length}
                  className='w-3/12 h-10 bg-theme-accent-dark rounded-md hover:bg-theme-text text-white font-semibold rounded-l-none cursor-pointer disabled:bg-slate-600'>
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
export default ArtistSearch;
