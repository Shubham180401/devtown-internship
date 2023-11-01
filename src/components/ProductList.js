import React, { useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import Filters from './Filters';
import Pagination from './Pagination';
import products from './ProductsData';

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ProductList = () => {

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortType, setSortType] = useState('asc'); // 'asc' or 'desc'
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const filterProducts = (category) => {
    const filtered = category
      ? products.filter((product) => product.category === category)
      : products;
    setFilteredProducts(filtered);
  };

  const sortProducts = () => {
    const sortedProducts = [...filteredProducts];
    if (sortType === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === 'desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  };

  const handleSortChange = (event) => {
    setSortType(event.target.value);
    sortProducts();
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <ProductListContainer>
      <Filters onCategoryChange={filterProducts} onSortChange={handleSortChange} />
      {currentProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <Pagination
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        onPageChange={handlePageChange}
      />
    </ProductListContainer>
  );
};

export default ProductList;