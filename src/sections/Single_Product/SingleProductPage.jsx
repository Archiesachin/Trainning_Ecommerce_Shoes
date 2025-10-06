import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import homeData from "../Homepage/Homeproduct";
import mensData from '../Mens Page/menProducts';
import womenData from '../Womens Page/womenProducts'
import newData from '../New Arrivals Page/newProducts'
import { useState } from "react";
import './singleProduct.css'
import { useCart } from '../../context/CartContext';

const SingleProductPage = () => {
  const { category, id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");

 
  let product
  if (category === "mens") {
    product = mensData.find(p => p.id === parseInt(id));
  } else if (category === "home") {
    product = homeData.find(p => p.id === parseInt(id));
  }else if (category === "womens") {
    product = womenData.find(p => p.id === parseInt(id));
  }else if (category === "new") {
    product = newData.find(p => p.id === parseInt(id));
  }

  const [selectedImg, setSelectedImg] = useState(product.images[0]);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  if (!product) return <div>Product not found.</div>;

   const { addToCart, openCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize || selectedSize === "size") {
      // Optionally add validation.
      alert("Please select a size before adding to cart.");
      return;
    }
   
    addToCart({
      id: product.id,
      image: product.img,
      name: product.product_name,
      color: "Default",
      size: selectedSize,
      price: product.price,
      quantity: 1 
    });

    openCart();
  };
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
            <select 
            name="size-dropdown"
            value={selectedSize}
            onChange={handleSizeChange}>
                <option value="size">Size</option>
                <option value="5">5</option>
                <option value="5.5">5.5</option>
                <option value="6">6</option>
                <option value="6.5">6.5</option>
                <option value="7">7</option>
                <option value="7.5">7.5</option>
                <option value="8">8</option>
                <option value="8.5">8.5</option>
                <option value="9">9</option>
                <option value="9.5">9.5</option>
                <option value="10">10</option>
                <option value="11">11</option>
            </select>
          </div>

          <button onClick={handleAddToCart}>Add to Cart</button>
          
        </div>
      </div>

      <div className="product-details">
        
      </div>
    </div>

    </div>
  )
}

export default SingleProductPage