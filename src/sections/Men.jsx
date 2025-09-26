
import React, { useState } from "react";
import menProducts from "./menProducts";
import './Men.css';
 
const promoImg = "/public/images/mens/25Q3_SpendandSave_Collections-TilePromo-ShortBanner_Banner01-02_Mobile_2x3_d1979ade-3243-44c0-ac2f-40264deb2ccf.png";
 
function Men() {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [selectedVariants, setSelectedVariants] = useState(
    menProducts.reduce((acc, p) => {
      acc[p.id] = 0;
      return acc;
    }, {})
  );
 
  const handleColorSelect = (productId, variantIdx) => {
    setSelectedVariants({
      ...selectedVariants,
      [productId]: variantIdx
    });
  };
 
  return (
    <div className="men-section-bg">
      <div className="men-breadcrumb">
        Home <span>/</span> Men&apos;s Shoes
      </div>
      <h1 className="men-title">Men&apos;s Shoes</h1>
      <p className="men-desc">
        The world's most comfortable shoes for life’s everyday adventures.
      </p>
 
      <div className="men-controls">
        <div className="men-filter">
          <div className="filter-icon-circle">
            <svg className="filter-sliders-svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="#23201c" strokeWidth="1" fill="none" />
              <line x1="10" y1="12" x2="22" y2="12" stroke="#23201c" strokeWidth="1" />
              <circle cx="13" cy="12" r="1.2" fill="#23201c" />
              <line x1="10" y1="16" x2="22" y2="16" stroke="#23201c" strokeWidth="1" />
              <circle cx="19" cy="16" r="1.2" fill="#23201c" />
              <line x1="10" y1="20" x2="22" y2="20" stroke="#23201c" strokeWidth="1" />
              <circle cx="16" cy="20" r="1.2" fill="#23201c" />
            </svg>
          </div>
          FILTER <span className="men-product-count">(41 products)</span>
        </div>
        <button className="featured-btn">
          FEATURED
          <span className="featured-icon-circle">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="10" stroke="#23201c" strokeWidth="2"/>
              <polyline points="7,9 11,13 15,9" stroke="#23201c" strokeWidth="2" fill="none"/>
            </svg>
          </span>
        </button>
      </div>
 
 
     
      <div className="men-section-bg">
      <div className="men-products-wrapper">
        {menProducts.map((product) => {
          const currentVariant = product.variants[selectedVariants[product.id]];
          const hasSizes = product.sizes && product.sizes.length > 0;
          return (
            <div
              key={product.id}
              className={`product-card${hoveredCardId === product.id ? " hover" : ""}`}
              onMouseEnter={() => setHoveredCardId(product.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              style={{position: "relative", overflow: "visible"}}
            >
              {product.label && <span className="product-label">{product.label}</span>}
              <img
                src={currentVariant.image}
                alt={`${product.name} - ${currentVariant.colorName}`}
                className="product-image"
                draggable="false"
              />
              <div className="product-body">
                <h3 className="product-title">{product.name}</h3>
                <div className="product-subtitle">{product.subtitle}</div>
                <div className="product-price">${product.price}</div>
                <div
                  className="product-colors"
                  onClick={e => e.stopPropagation()}
                >
                  {product.variants.map((variant, idx) => (
                    <span
                      key={idx}
                      className={`color-dot${selectedVariants[product.id] === idx ? " selected" : ""}`}
                      style={{ background: variant.colorHex }}
                      title={variant.colorName}
                      onClick={() => handleColorSelect(product.id, idx)}
                    ></span>
                  ))}
                  {product.extraColors > 0 && (
                    <span className="extra-colors">{`+${product.extraColors}`}</span>
                  )}
                </div>
              </div>
             
              {hoveredCardId === product.id && hasSizes && (
                <div className="size-dropdown-float">
                  {product.sizes.map((size) => (
                    <div className="size-box-float" key={size}>{size}</div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
   
      <div className="promo-banner-men">
        <div className="promo-content-men">
          <span className="promo-small">TWO DAYS ONLY</span>
          <h2 className="promo-title">$30 Off When You Spend $150</h2>
          <p className="promo-body">
            For 9/24–9/25, your cart just got cozier. Spend $150 and we’ll drop $30 off, no code needed. Exclusions apply.
          </p>
        </div>
      </div>
     
      <div className="men-section-bg">
      <div className="men-products-wrapper">
        {menProducts.map((product) => {
          const currentVariant = product.variants[selectedVariants[product.id]];
          const hasSizes = product.sizes && product.sizes.length > 0;
          return (
            <div
              key={product.id}
              className={`product-card${hoveredCardId === product.id ? " hover" : ""}`}
              onMouseEnter={() => setHoveredCardId(product.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              style={{position: "relative", overflow: "visible"}}
            >
              {product.label && <span className="product-label">{product.label}</span>}
              <img
                src={currentVariant.image}
                alt={`${product.name} - ${currentVariant.colorName}`}
                className="product-image"
                draggable="false"
              />
              <div className="product-body">
                <h3 className="product-title">{product.name}</h3>
                <div className="product-subtitle">{product.subtitle}</div>
                <div className="product-price">${product.price}</div>
                <div
                  className="product-colors"
                  onClick={e => e.stopPropagation()}
                >
                  {product.variants.map((variant, idx) => (
                    <span
                      key={idx}
                      className={`color-dot${selectedVariants[product.id] === idx ? " selected" : ""}`}
                      style={{ background: variant.colorHex }}
                      title={variant.colorName}
                      onClick={() => handleColorSelect(product.id, idx)}
                    ></span>
                  ))}
                  {product.extraColors > 0 && (
                    <span className="extra-colors">{`+${product.extraColors}`}</span>
                  )}
                </div>
              </div>
             
              {hoveredCardId === product.id && hasSizes && (
                <div className="size-dropdown-float">
                  {product.sizes.map((size) => (
                    <div className="size-box-float" key={size}>{size}</div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </div>
  );
}
 
export default Men;