import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PaginationButtons = ({
  offset,
  usersCount,
  onPrevPage,
  onNextPage,
  itemsPerPage,
}) => {
  return (
    <div className="pagination-buttons">
      <div onClick={onPrevPage} className={offset === 0 ? 'disabled' : null}>
        <FaArrowLeft />
      </div>
      <div
        onClick={onNextPage}
        className={offset + itemsPerPage >= usersCount ? 'disabled' : null}
      >
        <FaArrowRight />
      </div>
    </div>
  );
};

export default PaginationButtons;
