import React from 'react';
import { useState } from 'react';
import PaymentSuccessModal from './PaymentSuccessModal';
import './checkout.css';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const [showModal, setShowModal] = useState(false);
  const handlePayNow = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div className="checkout-page">
      <div className="checkout-main">
        <Link to='/'>
        <img
          src="public/images/logo.jpeg"
          alt="allbirds"
          className="checkout-logo"
        />
        </Link>
        
        <div className="checkout-express-checkout">
          <div className="checkout-express-title">Express checkout</div>
          <div className="checkout-express-buttons">
            <button className="checkout-shop-btn">shop</button>
            <button className="checkout-paypal-btn">PayPal</button>
          </div>
          <div className="checkout-divider">
            <span>OR</span>
          </div>
        </div>

        <div className="checkout-section">
          <h2>Contact</h2>
          <div className="checkout-input-row">
            <input type="email" placeholder="Email" />
            <a href="/" className="checkout-signin-link">Sign in</a>
          </div>
          <div className="checkout-checkbox-row">
            <input type="checkbox" id="news1" checked readOnly />
            <label htmlFor="news1">Email me with news and offers</label>
          </div>
        </div>

        <div className="checkout-section">
          <h2>Delivery</h2>
          <div className="checkout-input-row">
            <select>
              <option value="">Select country</option>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Australia</option>
              <option>India</option>
              <option>Germany</option>
              <option>France</option>
              <option>Italy</option>
              <option>Spain</option>
              <option>China</option>
              <option>Japan</option>
              <option>Brazil</option>
              <option>Mexico</option>
              <option>South Africa</option>
              <option>Russia</option>
              <option>Singapore</option>
              <option>New Zealand</option>
              <option>Sweden</option>
              <option>Norway</option>
              <option>Finland</option>
              <option>Denmark</option>
              <option>Netherlands</option>
              <option>Belgium</option>
              <option>Switzerland</option>
              <option>Austria</option>
              <option>Poland</option>
              <option>Turkey</option>
              <option>Saudi Arabia</option>
              <option>UAE</option>
              <option>Argentina</option>
              <option>Chile</option>
              <option>Colombia</option>
              <option>Egypt</option>
              <option>Pakistan</option>
              <option>Bangladesh</option>
              <option>Indonesia</option>
              <option>Malaysia</option>
              <option>Thailand</option>
              <option>Vietnam</option>
              <option>Philippines</option>
              <option>South Korea</option>
              <option>Nigeria</option>
              <option>Kenya</option>
              <option>Morocco</option>
              <option>Israel</option>
              <option>Greece</option>
              <option>Portugal</option>
              <option>Ireland</option>
              <option>Czech Republic</option>
              <option>Hungary</option>
              <option>Romania</option>
              <option>Slovakia</option>
              <option>Croatia</option>
              <option>Slovenia</option>
              <option>Bulgaria</option>
              <option>Ukraine</option>
              <option>Estonia</option>
              <option>Latvia</option>
              <option>Lithuania</option>
              <option>Luxembourg</option>
              <option>Malta</option>
              <option>Iceland</option>
              <option>Greenland</option>
              <option>Other</option>
            </select>
          </div>
          <div className="checkout-input-row">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <div className="checkout-input-row">
            <input type="text" placeholder="Company (optional)" />
            <input type="text" placeholder="Address" />
          </div>
          <input type="text" placeholder="Apartment, suite, etc. (optional)" />
          <div className="checkout-input-row">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="ZIP code" />
          </div>
          <div className="checkout-checkbox-row">
            <input type="checkbox" id="news2" />
            <label htmlFor="news2">Text me with news and offers</label>
          </div>
        </div>

        <div className="checkout-section">
          <h2>Shipping method</h2>
          <div className="checkout-shipping-box">
            Enter your shipping address to view available shipping methods.
          </div>
        </div>

        <div className="checkout-section">
          <h2>Payment</h2>
          <div className="checkout-subtitle">
            All transactions are secure and encrypted.
          </div>
          <div className="checkout-payment-methods">
            <label>
              <input type="radio" name="payment" checked readOnly />
              Credit card
            </label>
            <span className="checkout-card-icons">
              <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
              <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="MC" />
              <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" />
              <span className="checkout-card-plus">+5</span>
            </span>
          </div>
          <div className="checkout-input-row">
            <input type="text" placeholder="Card number" />
          </div>
          <div className="checkout-input-row">
            <input type="text" placeholder="Expiration date (MM / YY)" />
            <input type="text" placeholder="Security code" />
          </div>
          <input type="text" placeholder="Name on card" />

          <div className="checkout-payment-methods">
            <label>
              <input type="radio" name="payment" />
              PayPal
            </label>
            <span className="checkout-paypal-label">PayPal</span>
          </div>
          <div className="checkout-payment-methods">
            <label>
              <input type="radio" name="payment" />
              Afterpay
            </label>
          </div>
        </div>

        <div className="checkout-section">
          <h2>Remember me</h2>
          <div className="checkout-checkbox-row">
            <input type="checkbox" id="remember" checked readOnly />
            <label htmlFor="remember">Save my information for a faster checkout with a Shop account</label>
          </div>
          <div className="checkout-input-row">
            <input type="text" value="+1" readOnly />
          </div>
          <div className="checkout-secure-label">Secure and encrypted</div>
          <button className="checkout-paynow-btn" onClick={handlePayNow}>Pay now</button>
          <div className="checkout-terms">
            Your info will be saved to a Shop account. By continuing, you agree to Shop’s Terms of Service and acknowledge the Privacy Policy.
          </div>
          <div className="checkout-policies">
            <a href="/">Refund policy</a>
            <a href="/">Privacy policy</a>
            <a href="/">Terms of service</a>
          </div>
          <div className="checkout-terms-link">
            By placing this order, you agree to our Terms of Service and understand our Privacy Policy.
          </div>
        </div>
  </div>
  <PaymentSuccessModal show={showModal} onClose={handleCloseModal} />

      <div className="checkout-sidebar">
        <div className="checkout-sidebar-cart">
          <div className="checkout-cart-item">
            <img className="checkout-cart-img" src="public/images/Products/A11631_25Q3_Wool-Cruiser-Dark-Camel-Natural-White-Sole_PDP_LEFT__1_bec494cd-90bc-4d1a-b180-cd8a56464781_1.png" alt="" />
            <div>
              <div><b>2</b> Women's Wool Cruiser - Burgundy<br />(Natural White Sole)</div>
              <div className="checkout-cart-old">$200.00</div>
              <div className="checkout-cart-new">$180.32</div>
              <div className="checkout-cart-promo">SPENDANDSAVE30 ($-19.68)</div>
            </div>
          </div>
          <div className="checkout-cart-item">
            <img className="checkout-cart-img" src="public/images/Products/A11888_25Q3_Wool-Cruiser-Terracotta-Natural-White-Sole_PDP_LEFT__1_fcef493a-0b6b-4785-9d93-ec4931435ef4_1.png" alt="" />
            <div>
              <div><b>1</b> Women's Cruiser Slip On Corduroy - Dark Tan<br /> (Stony Cream Sole)</div>
              <div className="checkout-cart-old">$105.00</div>
              <div className="checkout-cart-new">$94.68</div>
              <div className="checkout-cart-promo">SPENDANDSAVE30 ($-10.32)</div>
            </div>
          </div>
        </div>

        <hr />

        <div className="checkout-sidebar-suggest">
          <h2>You might also like</h2>
          <div className="checkout-suggest-item">
            <img src="https://allbirds.com/cdn/shop/products/Belt_Bag_True_Black.png" alt="" className="checkout-suggest-img" />
            <div>
              <b>Recycled Belt Bag - True Black</b><br />
              One Size<br />
              <span className="checkout-price">$35.00</span>
            </div>
            <button className="checkout-add-btn">Add</button>
          </div>
          <div className="checkout-suggest-item">
            <img src="https://allbirds.com/cdn/shop/products/Shoe_Bag_True_Black.png" alt="" className="checkout-suggest-img" />
            <div>
              <b>Recycled Shoe Bag - True Black</b><br />
              One Size<br />
              <span className="checkout-price">$20.00</span>
            </div>
            <button className="checkout-add-btn">Add</button>
          </div>
          <div className="checkout-suggest-item">
            <img src="https://allbirds.com/cdn/shop/products/Belt_Bag_Teal_Blue.png" alt="" className="checkout-suggest-img" />
            <div>
              <b>Recycled Belt Bag - Twilight Teal</b><br />
              One Size<br />
              <span className="checkout-price">$35.00</span>
            </div>
            <button className="checkout-add-btn">Add</button>
          </div>
        </div>

        <div className="checkout-sidebar-discount">
          <input type="text" placeholder="Discount code or gift card" />
          <button className="checkout-apply-btn" disabled>Apply</button>
        </div>

        <div className="checkout-sidebar-totals">
          <div>Subtotal · 3 items <span>$275.00</span></div>
          <div>Shipping <span>Enter shipping address</span></div>
          <hr />
          <div className="checkout-total-row">
            <b>Total</b> <span className="checkout-total-price">USD $275.00</span>
          </div>
          <div className="checkout-total-savings">
            <span>💳 TOTAL SAVINGS $30.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
