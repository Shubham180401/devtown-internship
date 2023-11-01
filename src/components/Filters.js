import React from 'react';
import styled from 'styled-components';

const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  width: 100%;
`;

const FilterCategory = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  color: #333;
  font-size: 16px;
  outline: none;
  cursor: pointer;
`;

const FilterSort = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  color: #333;
  font-size: 16px;
  outline: none;
  cursor: pointer;
`;

const Option = styled.option`
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
background: #fff;
color: #333;
font-size: 16px;
outline: none;
cursor: pointer;
`;

const Filters = ({ onCategoryChange, onSortChange }) => {
  return (
    <FiltersContainer>
      <div>
        <label>Filter by Category : </label>
        <FilterCategory onChange={(e) => onCategoryChange(e.target.value)}>
          <Option value="">All Categories</Option>
          <Option value="Headphones">Headphones</Option>
          <Option value="SmartWatches">SmartWatches</Option>
          <Option value="Shades">Shades</Option>
          <Option value="Cameras">Cameras</Option>
          <Option value="Shoes">Shoes</Option>
        </FilterCategory>
      </div>
      <div>
        <label>Sort by Price : </label>
        <FilterSort onChange={(e) => onSortChange(e)}>
          <Option value="asc">Low to High</Option>
          <Option value="desc">High to Low</Option>
        </FilterSort>
      </div>
    </FiltersContainer>
  );
};

export default Filters;
