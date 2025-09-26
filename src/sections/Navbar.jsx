import React from 'react'
import { FaRegUser } from 'react-icons/fa6';
import { BsCart3 } from 'react-icons/bs';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext.jsx';

const Navbar = () => {
    const { openCart } = useCart();
  return (
    <nav>
        <div className="navbar">
            <div className="nav-part1">
            <div className="logo">
                <Link to='/'><img src="./images/logo.jpeg" alt="logo-img" /></Link>
            </div>
            <div className="nav-links">
                <ul>
                   <Link to="/men">Mens</Link>
                    <Link to="/women">Womens</Link>
                    <Link to="/new">New Arrivals</Link>
                </ul>
            </div>
            </div>

            <div className="nav-part2">
                <div className="nav-links">
                <ul>
                    <li>Our Stores</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="nav-options">


                <Link to='/signup'><FaRegUser/></Link>

                 <BsCart3 onClick={openCart} style={{ cursor: "pointer" }} />

            </div>
            </div>
            
             
        </div>
    </nav>
  )
}

export default Navbar