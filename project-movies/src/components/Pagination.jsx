import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          <span className="page-link">{i}</span>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav>
      <ul className="pagination">
        <li
          className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <span className="page-link">Previous</span>
        </li>
        {renderPageNumbers()}
        <li
          className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <span className="page-link">Next</span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;