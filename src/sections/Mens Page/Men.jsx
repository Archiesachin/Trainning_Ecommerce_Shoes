
import React, { useState } from "react";
import menProducts from "./menProducts";
import "./Men.css";
import { Link } from "react-router-dom";

const promoImg =
  "/public/images/mens/25Q3_SpendandSave_Collections-TilePromo-ShortBanner_Banner01-02_Mobile_2x3_d1979ade-3243-44c0-ac2f-40264deb2ccf.png";

function Men() {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [selectedVariants, setSelectedVariants] = useState(
    menProducts.reduce((acc, p) => {
      acc[p.id] = 0;
      return acc;
    }, {})
  );
  const [sortOption, setSortOption] = useState("FEATURED");
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  // Filters state
  const [labelFilter, setLabelFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [maxPriceFilter, setMaxPriceFilter] = useState(500);

  // Handle color selection for product variant
  const handleColorSelect = (productId, variantIdx) => {
    setSelectedVariants({
      ...selectedVariants,
      [productId]: variantIdx,
    });
  };

  // Toggle filter panel display
  const handleFilterClick = () => {
    setShowFilterPanel(!showFilterPanel);
  };

  // Get all unique colors from products
  const allColors = [
    ...new Set(menProducts.flatMap((p) => p.variants.map((v) => v.colorName))),
  ];

  // Apply filters
  const filteredProducts = menProducts.filter((product) => {
    // Label filter
    const labelMatch =
      labelFilter.length === 0 || labelFilter.includes(product.label);

    // Color filter
    const colorMatch =
      colorFilter.length === 0 ||
      product.variants.some((v) => colorFilter.includes(v.colorName));

    // Price filter
    const priceMatch = product.price <= maxPriceFilter;

    return labelMatch && colorMatch && priceMatch;
  });

  // Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "PRICE_LOW_HIGH":
        return a.price - b.price;
      case "PRICE_HIGH_LOW":
        return b.price - a.price;
      case "ALPHA_AZ":
        return a.name.localeCompare(b.name);
      case "ALPHA_ZA":
        return b.name.localeCompare(a.name);
      case "DATE_NEW_OLD":
        return b.id - a.id;
      case "DATE_OLD_NEW":
        return a.id - b.id;
      default:
        return 0;
    }
  });

  return (
    <div className="men-section-bg">
      {/* Breadcrumbs */}
      <div className="men-breadcrumb">
        Home <span>/</span> Men's Shoes
      </div>
      <h1 className="men-title">Men's Shoes</h1>
      <p className="men-desc">
        The world's most comfortable shoes for life’s everyday adventures.
      </p>

      {/* Filter + Sort Controls */}
      <div className="men-controls">
        <div className="men-filter" onClick={handleFilterClick}>
          <div className="filter-icon-circle">
            <svg
              className="filter-sliders-svg"
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
                strokeWidth="1"
                fill="none"
              />
              <line x1="10" y1="12" x2="22" y2="12" stroke="#23201c" strokeWidth="1" />
              <circle cx="13" cy="12" r="1.2" fill="#23201c" />
              <line x1="10" y1="16" x2="22" y2="16" stroke="#23201c" strokeWidth="1" />
              <circle cx="19" cy="16" r="1.2" fill="#23201c" />
              <line x1="10" y1="20" x2="22" y2="20" stroke="#23201c" strokeWidth="1" />
              <circle cx="16" cy="20" r="1.2" fill="#23201c" />
            </svg>
          </div>
          FILTER{" "}
          <span className="men-product-count">
            ({filteredProducts.length} products)
          </span>
        </div>

        {/* Featured dropdown */}
        <select
          className="featured-dropdown"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="FEATURED">FEATURED</option>
          <option value="BESTSELLING">BEST SELLING</option>
          <option value="ALPHA_AZ">ALPHABETICALLY, A-Z</option>
          <option value="ALPHA_ZA">ALPHABETICALLY, Z-A</option>
          <option value="PRICE_LOW_HIGH">PRICE, LOW TO HIGH</option>
          <option value="PRICE_HIGH_LOW">PRICE, HIGH TO LOW</option>
          <option value="DATE_OLD_NEW">DATE, OLD TO NEW</option>
          <option value="DATE_NEW_OLD">DATE, NEW TO OLD</option>
        </select>
      </div>

      {/* Filter Pills Bar */}
      <div className="filter-pills-bar">
        {/* Label Pills */}
        {labelFilter.map((lbl) => (
          <span key={lbl} className="filter-pill">
            {lbl}
            <button
              className="filter-pill-remove"
              onClick={() => setLabelFilter(labelFilter.filter((l) => l !== lbl))}
              aria-label={`Remove ${lbl} filter`}
            >
              ×
            </button>
          </span>
        ))}
        {/* Color Pills */}
        {colorFilter.map((color) => (
          <span key={color} className="filter-pill">
            {color}
            <button
              className="filter-pill-remove"
              onClick={() =>
                setColorFilter(colorFilter.filter((c) => c !== color))
              }
              aria-label={`Remove ${color} filter`}
            >
              ×
            </button>
          </span>
        ))}
        {/* Price pill (if active) */}
        {maxPriceFilter < 500 && (
          <span className="filter-pill">
            {`≤ $${maxPriceFilter}`}
            <button
              className="filter-pill-remove"
              onClick={() => setMaxPriceFilter(500)}
              aria-label="Remove price filter"
            >
              ×
            </button>
          </span>
        )}
        {/* Clear All Button */}
        {(labelFilter.length > 0 ||
          colorFilter.length > 0 ||
          maxPriceFilter < 500) && (
          <button
            className="filter-pill-clearall"
            onClick={() => {
              setLabelFilter([]);
              setColorFilter([]);
              setMaxPriceFilter(500);
            }}
          >
            Clear All
          </button>
        )}
      </div>

      {/* Filter Panel */}
      {showFilterPanel && (
        <div className="filter-panel">
          {/* Label filter */}
          <div className="filter-group">
            <h4>Label:</h4>
            {["New", "Bestseller"].map((lbl) => (
              <label key={lbl}>
                <input
                  type="checkbox"
                  checked={labelFilter.includes(lbl)}
                  onChange={(e) => {
                    if (e.target.checked)
                      setLabelFilter([...labelFilter, lbl]);
                    else
                      setLabelFilter(labelFilter.filter((l) => l !== lbl));
                  }}
                />{" "}
                {lbl}
              </label>
            ))}
          </div>

          {/* Color filter */}
          <div className="filter-group">
            <h4>Color:</h4>
            {allColors.map((c) => (
              <label key={c}>
                <input
                  type="checkbox"
                  checked={colorFilter.includes(c)}
                  onChange={(e) => {
                    if (e.target.checked)
                      setColorFilter([...colorFilter, c]);
                    else
                      setColorFilter(colorFilter.filter((cl) => cl !== c));
                  }}
                />{" "}
                {c}
              </label>
            ))}
          </div>

          {/* Price filter */}
          <div className="filter-group">
            <label>
              <h4>Price: ${maxPriceFilter}</h4>
            </label>
            <input
              type="range"
              min="0"
              max="500"
              value={maxPriceFilter}
              onChange={(e) => setMaxPriceFilter(Number(e.target.value))}
            />
          </div>

          <button onClick={() => setShowFilterPanel(false)}>
            Apply Filters
          </button>
        </div>
      )}

      {/* Products Grid */}
      <div className="men-products-wrapper">
        {sortedProducts.map((product) => {
          const currentVariant = product.variants[selectedVariants[product.id]];
          const hasSizes = product.sizes && product.sizes.length > 0;
          return (
           
            <div
              key={product.id}
              className={`product-card${hoveredCardId === product.id ? " hover" : ""}`}
              onMouseEnter={() => setHoveredCardId(product.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              style={{ position: "relative", overflow: "visible" }}
            >
               <Link key={product.id} to={`/singleProduct/mens/${product.id}`}>
              {product.label && <span className="product-label">{product.label}</span>}
              {product.label && (
                <span className="product-label">{product.label}</span>
              )}
              <img
                src={currentVariant.image}
                alt={`${product.name} - ${currentVariant.colorName}`}
                className="product-image"
                draggable="false"
              />
              </Link>
              <div className="product-body">
                <h3 className="product-title">{product.product_name}</h3>
                <div className="product-subtitle">{product.subtitle}</div>
                <h3 className="product-title">{product.name}</h3>
                {/* Updated subtitle to be color-specific */}
                <div className="product-subtitle">
                  {currentVariant.subtitle}
                </div>
                <div className="product-price">${product.price}</div>
                <div className="product-colors" onClick={(e) => e.stopPropagation()}>
                  {product.variants.map((variant, idx) => (
                    <span
                      key={idx}
                      className={`color-dot${
                        selectedVariants[product.id] === idx ? " selected" : ""
                      }`}
                      style={{ background: variant.colorHex }}
                      title={variant.colorName}
                      onClick={() => handleColorSelect(product.id, idx)}
                    ></span>
                  ))}
                  {!!product.extraColors && product.extraColors > 0 && (
                    <span className="extra-colors">{`+${product.extraColors}`}</span>
                  )}
                </div>
              </div>
              {hoveredCardId === product.id && hasSizes && (
                <div className="size-dropdown-float">
                  {product.sizes.map((size) => (
                    <div className="size-box-float" key={size}>
                      {size}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Men;

