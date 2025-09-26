import React from 'react'
import { FaRegUser } from 'react-icons/fa6';
import { BsCart3 } from 'react-icons/bs';
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
        <div className="navbar">
            <div className="nav-part1">
            <div className="logo">
                <img src="./images/logo.jpeg" alt="logo-img" />
            </div>
            <div className="nav-links">
                <ul>
                   <Link to="/men">Mens</Link>
                    <li>Womens</li>
                    <li>New Arrivals</li>
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
                <FaRegUser/>
                <BsCart3/>
            </div>
            </div>
            
             
        </div>
    </nav>
  )
}

export default Navbar