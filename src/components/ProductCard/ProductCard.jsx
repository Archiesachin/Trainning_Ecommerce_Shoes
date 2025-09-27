import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  // Use product.colors string as the background color
  const backgroundColor = product.colors;

  return (
    <div className="home-product-card" style={{ background: backgroundColor }}>
      <img
        src={product.img}
        alt={product.Title}
        className="product-card__image"
      />
      <div className="product-card__details">
        <h2 className="product-card__title">{product.Title}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
