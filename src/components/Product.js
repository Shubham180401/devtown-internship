import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 250px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductTitle = styled.h3`
  margin: 10px 0;
`;

const ProductDescription = styled.p`
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  margin: 10px 0;
`;

const Product = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>${product.price}</ProductPrice>
    </ProductContainer>
  );
};

export default Product;
