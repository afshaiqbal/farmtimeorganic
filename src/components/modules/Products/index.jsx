import React from 'react';
import productData from '../../../data';
import ProductCard from '../../elements/productCard';
import { Container } from 'reactstrap';
import './index.scss';

const Products = () => {
  return (
    <div  className='productsDisplay' id='product'>
    <Container>
    <div className='productSection'>
    <div className='title'>
    <h1 title="Our Products">
    Our Products
    </h1>
  </div>
    <div className="product-list">
      {productData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
    </Container>
    </div>
  );
};

export default Products;
