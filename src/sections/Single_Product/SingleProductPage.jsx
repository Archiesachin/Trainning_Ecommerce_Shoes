import React from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import products from "../Homepage/Homeproduct";
import { useState } from "react";
import './singleProduct.css'

const SingleProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImg, setSelectedImg] = useState(product.images[0]);

  if (!product) return <div>Product not found.</div>;
  return (
    <div className="singleProduct-wrapper">
        <div className="products-breadcrumb">
        <Link to='/'>Home </Link><span>/</span><Link to='/singleProduct'>Products </Link>
      </div>
    <div>
      <div className='productImage-container'>
      <div className='producImage-other'>
        {product.images.map(img => (
          <img
            key={img}
            src={img}
            alt={product.product_name}
            width={50}
            onClick={() => setSelectedImg(img)}
            
          />
        ))}
      </div>
      <img src={selectedImg} alt={product.product_name} width={300} className='singleProduct-img'/>
      </div>
      <div className="title-price">
        <h1 className='single-product-title'>{product.product_name}</h1>
        <p className='single-product-price'>${product.price}</p>
      </div>
      
      <p className='single-product-desc'>{product.description}</p>

      <div className='size-cart'>
        <h2>Explore product Details</h2>
        <div className="add-button-grp">
          <div className="dropdown">
            <select name="size-dropdown" id="">
            <option value="size">Size</option>
            <option >5</option>
            <option>5.5</option>
            <option>6</option>
            <option>6.5</option>
            <option>7</option>
            <option>7.5</option>
            <option>8</option>
            <option>8.5</option>
            <option >9</option>
            <option>9.5</option>
            <option>10</option>
            <option>11</option>
            </select>
          </div>

          <button>Add to Cart</button>
          
        </div>
      </div>

      <div className="product-details">
        
      </div>
    </div>

    </div>
  )
}

export default SingleProductPage