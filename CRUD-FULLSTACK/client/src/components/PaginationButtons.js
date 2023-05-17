import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PaginationButtons = ({
  offset,
  usersCount,
  onPrevPage,
  onNextPage,
  itemsPerPage,
}) => {
  const isFirstPage = offset === 0;
  const isLastPage = offset + itemsPerPage >= usersCount;

  return (
    <div className="pagination-buttons">
      <div onClick={onPrevPage} className={isFirstPage ? 'disabled' : null}>
        <FaArrowLeft />
      </div>
      <div onClick={onNextPage} className={isLastPage ? 'disabled' : null}>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default PaginationButtons;
