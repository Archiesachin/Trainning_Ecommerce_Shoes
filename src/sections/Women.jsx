import React from "react";
import { womenProducts } from "./womenProducts";
import "./Women.css";

function Women() {
  return (
    <div className="women-section-bg">
      <nav className="women-breadcrumb">
        Home <span>/</span> Women&apos;s Shoes
      </nav>

      <h1 className="women-title">Women&apos;s Shoes</h1>
      <p className="women-desc">
        The world's most comfortable shoes for life’s everyday adventures.
      </p>

      <div className="women-controls">
        <div className="women-filter">
          <div class="filter-icon-circle">
            <svg
              class="filter-sliders-svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <circle
                cx="16"
                cy="16"
                r="15"
                stroke="#23201c"
                stroke-width="1"
                fill="none"
              />

              <line
                x1="10"
                y1="12"
                x2="22"
                y2="12"
                stroke="#23201c"
                stroke-width="1"
              />
              <circle cx="13" cy="12" r="1.2" fill="#23201c" />

              <line
                x1="10"
                y1="16"
                x2="22"
                y2="16"
                stroke="#23201c"
                stroke-width="1"
              />
              <circle cx="19" cy="16" r="1.2" fill="#23201c" />

              <line
                x1="10"
                y1="20"
                x2="22"
                y2="20"
                stroke="#23201c"
                stroke-width="1"
              />
              <circle cx="16" cy="20" r="1.2" fill="#23201c" />
            </svg>
          </div>
          FILTER <span className="women-product-count">(41 products)</span>
        </div>
        <button className="featured-btn">
          FEATURED
          <span className="featured-icon-circle">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle
                cx="11"
                cy="11"
                r="10"
                stroke="#23201c"
                stroke-width="2"
              />
              <polyline
                points="7,9 11,13 15,9"
                stroke="#23201c"
                stroke-width="2"
                fill="none"
              />
            </svg>
          </span>
        </button>
      </div>

      <div className="women-product-grid">
        {womenProducts.map((product, idx) => (
          <React.Fragment key={product.id}>
            <div className="women-card">
              {product.tag && (
                <div className="women-card-tag">{product.tag}</div>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="women-card-image"
              />
              <h3 className="women-card-title">{product.name}</h3>
            </div>
            {/* After 3rd card (for a 3-column grid) */}
            {idx === 2 && (
              <div className="women-grid-banner">
                <div className="banner-content">
                  <div className="banner-title">TWO DAYS ONLY</div>
                  <div className="banner-headline">
                    $30 Off When You Spend $150
                  </div>
                  <div className="banner-desc">
                    From 9/24–9/25, your cart just got cozier. Spend $150 and
                    we’ll drop $30 off, no code needed. Exclusions apply.
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Women;
