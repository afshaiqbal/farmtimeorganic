import React from 'react';
import "./index.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
