import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Card from './Card';

function PaginatedCardDeck({ dataset }) {
  const [currentPage, setCurrentPage] = useState();
  const [pages, setPages] = useState();
  const [paginatedData, setPaginatedData] = useState();
  const itemsPerPage = 12;

  useEffect(() => {
    if (dataset?.length) {
      setCurrentPage(0);

      setPages(Math.ceil(dataset.length / itemsPerPage));
    }
  }, [dataset]);

  useEffect(() => {
    console.log(currentPage);
    if (dataset?.length) {
      const start = currentPage * itemsPerPage;
      const slicedData = dataset.slice(start, start + itemsPerPage);
      setPaginatedData(slicedData);
    }
  }, [currentPage]);

  const handlePageClick = (page) => {
    setCurrentPage(page.selected);
  };

  return (
    <>
      <div className='xl:flex lg:flex sm:flex-1 md:flex flex-wrap py-10'>
        {paginatedData &&
          paginatedData.map((album) => {
            return <Card key={album.collectionId} album={album} />;
          })}
      </div>
      <div className='my-10 paginatedNav'>
        <ReactPaginate breakLabel='...' nextLabel='>' onPageChange={handlePageClick} pageRangeDisplayed={4} pageCount={pages} previousLabel='<' renderOnZeroPageCount={null} />
      </div>
    </>
  );
}

export default PaginatedCardDeck;
