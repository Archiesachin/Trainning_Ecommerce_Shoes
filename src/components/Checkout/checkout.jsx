import React, { useState } from 'react';
import './checkout.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const { closeCart } = useCart();
  const navigate = useNavigate();
  const handlePayNow = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };
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
  <button
    type="button"
    className="checkout-signin-link"
    onClick={() => {
      closeCart();
      navigate('/login');
    }}
    style={{ background: "none", border: "none", color: "#007bff", cursor: "pointer", textDecoration: "underline" }}
  >
    Sign in
  </button>
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
              <input
                type="radio"
                name="payment"
                value="credit"
                checked={paymentMethod === 'credit'}
                onChange={() => setPaymentMethod('credit')}
              />
              Credit card
            </label>
            <span className="checkout-card-icons">
              <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
              <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="MC" />
              <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" />
              <span className="checkout-card-plus">+5</span>
            </span>
          </div>
          <div className="checkout-payment-methods">
            <label>
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={() => setPaymentMethod('paypal')}
              />
              PayPal
            </label>
          </div>
          <div className="checkout-payment-methods">
            <label>
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={() => setPaymentMethod('cod')}
              />
              Cash on Delivery
            </label>
          </div>
          {paymentMethod === 'credit' && (
            <>
              <div className="checkout-input-row">
                <input type="text" placeholder="Card number" />
              </div>
              <div className="checkout-input-row">
                <input type="text" placeholder="Expiration date (MM / YY)" />
                <input type="text" placeholder="Security code" />
              </div>
              <input type="text" placeholder="Name on card" />
            </>
          )}
          {paymentMethod === 'paypal' && (
            <div className="checkout-input-row">
              <input type="text" placeholder="Enter UPI ID (e.g. yourname@bank)" />
            </div>
          )}
          {/* No extra fields for Cash on Delivery */}
        </div>

        <div className="checkout-section">
          <h2>Remember me</h2>
          <div className="checkout-checkbox-row">
            <input type="checkbox" id="remember" checked readOnly />
            <label htmlFor="remember">Save my information for a faster checkout with a Shop account</label>
          </div>
          <div className="checkout-input-row">
            <select className="checkout-phone-country">
              <option value="+1">🇺🇸 +1 (USA)</option>
              <option value="+44">🇬🇧 +44 (UK)</option>
              <option value="+91">🇮🇳 +91 (India)</option>
              <option value="+61">🇦🇺 +61 (Australia)</option>
              <option value="+81">🇯🇵 +81 (Japan)</option>
              <option value="+49">🇩🇪 +49 (Germany)</option>
              <option value="+33">🇫🇷 +33 (France)</option>
              <option value="+86">🇨🇳 +86 (China)</option>
              <option value="+55">🇧🇷 +55 (Brazil)</option>
              <option value="+7">🇷🇺 +7 (Russia)</option>
              <option value="+27">🇿🇦 +27 (South Africa)</option>
              <option value="+34">🇪🇸 +34 (Spain)</option>
              <option value="+39">🇮🇹 +39 (Italy)</option>
              <option value="+82">🇰🇷 +82 (South Korea)</option>
              <option value="+65">🇸🇬 +65 (Singapore)</option>
              <option value="+62">🇮🇩 +62 (Indonesia)</option>
              <option value="+60">🇲🇾 +60 (Malaysia)</option>
              <option value="+63">🇵🇭 +63 (Philippines)</option>
              <option value="+234">🇳🇬 +234 (Nigeria)</option>
              <option value="+92">🇵🇰 +92 (Pakistan)</option>
              <option value="+20">🇪🇬 +20 (Egypt)</option>
              <option value="+971">🇦🇪 +971 (UAE)</option>
              <option value="+966">🇸🇦 +966 (Saudi Arabia)</option>
              <option value="+90">🇹🇷 +90 (Turkey)</option>
              <option value="+48">🇵🇱 +48 (Poland)</option>
              <option value="+46">🇸🇪 +46 (Sweden)</option>
              <option value="+47">🇳🇴 +47 (Norway)</option>
              <option value="+358">🇫🇮 +358 (Finland)</option>
              <option value="+31">🇳🇱 +31 (Netherlands)</option>
              <option value="+32">🇧🇪 +32 (Belgium)</option>
              <option value="+41">🇨🇭 +41 (Switzerland)</option>
              <option value="+43">🇦🇹 +43 (Austria)</option>
              <option value="+52">🇲🇽 +52 (Mexico)</option>
              <option value="+56">🇨🇱 +56 (Chile)</option>
              <option value="+57">🇨🇴 +57 (Colombia)</option>
              <option value="+380">🇺🇦 +380 (Ukraine)</option>
              <option value="+420">🇨🇿 +420 (Czech Republic)</option>
              <option value="+36">🇭🇺 +36 (Hungary)</option>
              <option value="+40">🇷🇴 +40 (Romania)</option>
              <option value="+421">🇸🇰 +421 (Slovakia)</option>
              <option value="+385">🇭🇷 +385 (Croatia)</option>
              <option value="+386">🇸🇮 +386 (Slovenia)</option>
              <option value="+359">🇧🇬 +359 (Bulgaria)</option>
              <option value="+372">🇪🇪 +372 (Estonia)</option>
              <option value="+371">🇱🇻 +371 (Latvia)</option>
              <option value="+370">🇱🇹 +370 (Lithuania)</option>
              <option value="+352">🇱🇺 +352 (Luxembourg)</option>
              <option value="+356">🇲🇹 +356 (Malta)</option>
              <option value="+353">🇮🇪 +353 (Ireland)</option>
              <option value="+354">🇮🇸 +354 (Iceland)</option>
              <option value="+299">🇬🇱 +299 (Greenland)</option>
            </select>
            <input type="text" placeholder="Phone number" />
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
  {/* PaymentSuccessModal removed */}
  {showSuccess && (
    <div className="checkout-success-popup-overlay">
      <div className="checkout-success-popup">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="28" fill="#e6ffe6" stroke="#28a745" strokeWidth="4" />
          <polyline
            points="18,32 28,42 44,22"
            fill="none"
            stroke="#28a745"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 40,
              strokeDashoffset: 40,
              animation: 'checkout-success-tick 0.7s ease forwards'
            }}
          />
        </svg>
        <div className="checkout-success-text">Payment Successful!</div>
      </div>
      <style>{`
        .checkout-success-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .checkout-success-popup {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(40,167,69,0.15);
          padding: 32px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: checkout-success-fadein 0.4s ease;
        }
        .checkout-success-text {
          margin-top: 18px;
          font-size: 1.5rem;
          color: #28a745;
          font-weight: 600;
          letter-spacing: 1px;
          text-shadow: 0 2px 8px #e6ffe6;
        }
        @keyframes checkout-success-tick {
          to { stroke-dashoffset: 0; }
        }
        @keyframes checkout-success-fadein {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )}

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
            <img src="public/images/Products/A11893_25Q3_Tree-Glider-Thunder-Green-Stony-Cream-Sole_PDP_LEFT__1.png" alt="" className="checkout-suggest-img" />
            <div>
              <b>Recycled Belt Bag - True Black</b><br />
              One Size<br />
              <span className="checkout-price">$35.00</span>
            </div>
            <button className="checkout-add-btn">Add</button>
          </div>
          <div className="checkout-suggest-item">
            <img src="public/images/Products/25Q2_BAU_Site_TreeRunnerNZ-WomenCollection-Tile_Desktop_3x2_cabbd614-ea88-4b26-acd7-4cdfac1ae754.jpg.jpeg" alt="" className="checkout-suggest-img" />
            <div>
              <b>Recycled Shoe Bag - True Black</b><br />
              One Size<br />
              <span className="checkout-price">$20.00</span>
            </div>
            <button className="checkout-add-btn">Add</button>
          </div>
          <div className="checkout-suggest-item">
            <img src="public/images/Products/OIP-removebg-preview.png" alt="" className="checkout-suggest-img" />
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
