import React, { useState } from 'react';
import ProductCard from './ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homeproduct from '../Homeproduct'
import Slider from "react-slick";

function ProductsHomepage() {

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden', padding:'20px', marginTop:'30px' , display:'flex', justifyContent:'center', flexDirection:'column'}}>
      <h3 style={{padding:'20px', fontWeight:'normal', fontSize:'30px'}}>New Arrivals</h3>
     <Slider {...settings}>
        {Homeproduct.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
}

export default ProductsHomepage

