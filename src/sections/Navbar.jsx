import React from 'react'
import { FaRegUser } from 'react-icons/fa6';
import { BsCart3 } from 'react-icons/bs';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="navbar">
            <div className="logo">
                <img src="./images/logo.jpeg" alt="logo-img" />
            </div>
            <div className="nav-links">
                <ul>
                    <li>Mens</li>
                    <li>Womens</li>
                    <li>New Arrivals</li>
                </ul>
            </div>
             <div className="nav-links">
                <ul>
                    <li>Our Stores</li>
                    <li>Rerun</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="nav-options">
                <FaRegUser/>
                <BsCart3/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar