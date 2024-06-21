import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { productData, popcornData } from '../../../data';
import './index.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find((item) => item.id.toString() === id);
  const popcorn = popcornData.find((item) => item.id.toString() === id);
  const [currentSlide, setCurrentSlide] = useState(0);

  const item = product || popcorn;

  if (!item) {
    return <div>Product not found</div>;
  }

  const onChange = (index) => {
    setCurrentSlide(index);
  };

  // Format description with line breaks
  const formattedDescription = item.description.split('. ')?.map((sentence, index, arr) => {
    const isLast = index === arr?.length - 1;
    return (
      <span key={index}>
        {sentence}{isLast ? '' : '. '}
        {!isLast && <br />}
      </span>
    );
  });

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-images">
          <Carousel 
            showThumbs={false} 
            showStatus={false} 
            infiniteLoop 
            onChange={onChange}
            selectedItem={currentSlide}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow carousel-arrow-prev">
                  &lt;
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow carousel-arrow-next">
                  &gt;
                </button>
              )
            }
          >
            {item?.images?.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${item.name} ${index + 1}`} className="carousel-image" />
              </div>
            ))}
          </Carousel>
          <div className="carousel-counter">
            {currentSlide + 1} / {item?.images?.length}
          </div>
        </div>
        <div className="product-info">
          <h3>{item.quantity}</h3>
          <p className="price">{item.price}</p>
          <p>{item.ingredients}</p>
          <p>Type: {item.type}</p>
          <p>Brand: {item.brand}</p>
          <p className="availability">Availability: {item.availability}</p>
          {/* <div className="add-to-cart">
            <button>Click here to place an order with us</button>
          </div> */}
        </div>
      </div>
      <div className='product-description'>
        {formattedDescription}
      </div>
    </div>
  );
};

export default ProductDetail;
