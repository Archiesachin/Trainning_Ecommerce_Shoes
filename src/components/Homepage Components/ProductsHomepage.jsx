import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homeproduct from '../../sections/Homepage/Homeproduct'
import Slider from "react-slick";
import { Link } from 'react-router-dom';


export default function ProductsHomepage() {

    var settings = {
     dots: false,
    infinite: true,
    slidesToShow: 3,
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
      <div className="heading" style={{display:'flex', gap:'10px', fontFamily:'Lexend Exa'}}>
      <Link to='/men'><h3 style={{color:'black',padding:'20px', fontWeight:'normal', fontSize:'16px', textDecoration:'underline'}}>SHOP MEN</h3></Link>
      <Link to='/women'><h3 style={{color:'black', padding:'20px', fontWeight:'normal', fontSize:'16px', textDecoration:'underline'}}>SHOP WOMEN</h3></Link>
      </div>
     <Slider {...settings}>
        {Homeproduct.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
}

