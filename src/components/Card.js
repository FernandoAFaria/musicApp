import React from 'react';
import { format, parseISO } from 'date-fns';

function Card({ album }) {
  return (
    <div className='lg:w-5/12 xl:w-4/12 w-11/12 mx-auto xl:mx-0 md:w-5/12 flex sm:mx-auto mb-6 items-start px-4'>
      <div className='w-32'>
        <img src={album.artworkUrl100} alt={album.collectionName} className='h-full w-full object-contain overflow-hidden rounded' />
      </div>
      <div className='w-full py-0 pl-4 pr-4'>
        <p className='uppercase text-md text-theme-text pb-0 font-bold'>{album.collectionName}</p>
        <p className=' text-sm text-theme-text pb-0 mb-0 font-semibold'>Artist: {album.artistName}</p>
        <div className='text-xs mb-3'>
          <span className='text-xs text-theme-accent font-semibold'>Genre: {album.primaryGenreName}</span>
        </div>
        <p className='text-xs text-gray-600'>Released: {format(parseISO(album.releaseDate), 'MM/dd/yyyy')}</p>
      </div>
    </div>
  );
}

export default Card;
