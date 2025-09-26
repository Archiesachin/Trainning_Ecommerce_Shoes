import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-section">
          <h4>SUBSCRIBE TO OUR EMAILS</h4>
          <div className="input-field">
            <input type="email" placeholder="Email Address" />
            <button>Sign Up</button>
          </div>
          
        </div>
        <div className="footer-section">
          <h4>HELP</h4>
          <ul>
            <li>Live Chat</li>
            <li>Call Us</li>
            <li>Text Us</li>
            <li>help@allbirds.com</li>
            <li>FAQ/Contact Us</li>
            <li>Returns/Exchanges</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>SHOP</h4>
          <ul>
            <li>Men's Shoes</li>
            <li>Women's Shoes</li>
            <li>Men's Apparel</li>
            <li>Women's Apparel</li>
            <li>Socks</li>
            <li>Gift Cards</li>
            <li>Refer a Friend</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li>Our Stores</li>
            <li>Our Story</li>
            <li>Our Materials</li>
            <li>Sustainability</li>
            <li>Investors</li>
            <li>Shoe Care</li>
            <li>Affiliates</li>
            <li>Bulk Orders</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Allbirds, Inc. All Rights Reserved</p>
        <p>Refund policy | Privacy policy | Terms of service | Do Not Sell My Personal Information</p>
      </div>
    </div>
  );
};

export default Footer;
