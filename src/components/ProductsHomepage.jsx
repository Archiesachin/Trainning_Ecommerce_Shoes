import React, { useState } from 'react';
import ProductCard from './ProductCard';

function ProductsHomepage({ products }) {
 const [start, setStart] = useState(0);
  const visibleCount = 4;
  const total = products.length;

  const handlePrev = () => {
    setStart(prev => (prev - visibleCount < 0 ? Math.max(total - visibleCount, 0) : prev - visibleCount));
  };

  const handleNext = () => {
    setStart(prev => (prev + visibleCount >= total ? 0 : prev + visibleCount));
  };

  // Ensure you always show up to 4 products, even if wrapping around
  const visibleProducts = [];
  for (let i = 0; i < visibleCount; i++) {
    const idx = (start + i) % total; // circular wrap-around
    visibleProducts.push(products[idx]);
  }

  return (
    <div style={{ width: '100%', position: 'relative', overflow: 'hidden', padding:'20px', marginTop:'30px' }}>
        <div className="top-line" style={{display:'flex', justifyContent:'space-between'}}>
            <div className="left-heading">
                <h2 style={{fontWeight:'normal', fontSize:'25px'}}>New Arrivals</h2>
            </div>

            <div className="card-button" style={{display:'flex', gap:'20px'}}>
                <button onClick={handlePrev} style={{width:'55px', padding:'15px', fontSize:'23px', borderRadius:'50%', border:'none', backgroundColor:'black', color:'white', cursor:'pointer'}}>
                &lt;
                </button>
                <button onClick={handleNext} style={{width:'55px', padding:'15px', fontSize:'23px', borderRadius:'50%', border:'none', backgroundColor:'black', color:'white', cursor:'pointer' }}>
                &gt;
                </button>
            </div>
        </div>
        
     
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsHomepage

// Usage:
// <ProductSlider products={Homeproduct} />
