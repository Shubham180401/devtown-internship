import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const PageNumber = styled.button`
  background: #007bff;
  color: #fff;
  border: 1px solid #007bff;
  padding: 5px 10px;
  margin: 10px 5px;
  border-radius: 5px;
  cursor: pointer;

  &.active {
    background: #fff;
    color: #007bff;
    border:2px solid #007bff;
  }
`;

const Pagination = ({ currentPage, productsPerPage, totalProducts, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <PageNumber
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </PageNumber>
      {pageNumbers.map((number) => (
        <PageNumber
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </PageNumber>
      ))}
      <PageNumber
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === Math.ceil(totalProducts / productsPerPage)}
      >
        Next
      </PageNumber>
    </PaginationContainer>
  );
};

export default Pagination;
