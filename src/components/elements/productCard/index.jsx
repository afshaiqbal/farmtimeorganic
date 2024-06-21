import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const ProductCard = ({ product, popcorn }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      {product && (
        <div className="card" onClick={() => handleClick(product.id)}>
          <img src={product.image} alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.shortDescription}</p>
          </div>
        </div>
      )}
      {popcorn && (
        <div className="cardnew" onClick={() => handleClick(popcorn.id)}>
          <img src={popcorn.image} alt={popcorn.name} />
          <div className="card-body">
            <h5 className="card-title">{popcorn.name}</h5>
            <p className="card-text">{popcorn.shortDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
