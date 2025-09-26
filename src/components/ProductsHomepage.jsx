import React, { useState } from 'react';
import ProductCard from './ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homeproduct from '../Homeproduct'
import Slider from "react-slick";


export default function ProductsHomepage() {

    var settings = {
     dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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

