import React, { useState } from 'react';
import './checkout.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";

const countryOptions = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'India',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'China',
  'Japan',
  'Brazil',
  'Mexico',
  'Singapore',
  'South Africa',
  'New Zealand',
  'Russia',
  'Netherlands',
  'Switzerland',
  'Sweden',
  'Norway',
  'Finland',
  'Ireland',
  'Denmark',
  'Poland',
  'Austria',
  'Belgium',
  'Portugal',
  'Saudi Arabia',
  'United Arab Emirates',
  'Turkey',
  'Argentina',
  'Chile',
  'Colombia',
  'Indonesia',
  'Malaysia',
  'Philippines',
  'South Korea',
  'Thailand',
  'Vietnam',
  'Pakistan',
  'Bangladesh',
  'Egypt',
  'Nigeria',
  'Kenya',
  'Morocco',
  'Israel',
  'Greece',
  'Czech Republic',
  'Romania',
  'Hungary',
  'Slovakia',
  'Slovenia',
  'Croatia',
  'Bulgaria',
  'Estonia',
  'Lithuania',
  'Latvia',
  'Iceland',
  'Greenland',
  'Other',
];

const phoneOptions = [
  { label: '🇺🇸 +1 (USA)', value: '+1' },
  { label: '🇨🇦 +1 (Canada)', value: '+1' },
  { label: '🇬🇧 +44 (UK)', value: '+44' },
  { label: '🇮🇳 +91 (India)', value: '+91' },
  { label: '🇦🇺 +61 (Australia)', value: '+61' },
  { label: '🇫🇷 +33 (France)', value: '+33' },
  { label: '🇩🇪 +49 (Germany)', value: '+49' },
  { label: '🇯🇵 +81 (Japan)', value: '+81' },
  { label: '🇨🇳 +86 (China)', value: '+86' },
  { label: '🇧🇷 +55 (Brazil)', value: '+55' },
  { label: '🇲🇽 +52 (Mexico)', value: '+52' },
  { label: '🇷🇺 +7 (Russia)', value: '+7' },
  { label: '🇸🇬 +65 (Singapore)', value: '+65' },
  { label: '🇿🇦 +27 (South Africa)', value: '+27' },
  { label: '🇳🇿 +64 (New Zealand)', value: '+64' },
  { label: '🇸🇦 +966 (Saudi Arabia)', value: '+966' },
  { label: '🇦🇪 +971 (UAE)', value: '+971' },
  { label: '🇹🇷 +90 (Turkey)', value: '+90' },
  { label: '🇦🇷 +54 (Argentina)', value: '+54' },
  { label: '🇮🇩 +62 (Indonesia)', value: '+62' },
  { label: '🇲🇾 +60 (Malaysia)', value: '+60' },
  { label: '🇵🇭 +63 (Philippines)', value: '+63' },
  { label: '🇰🇷 +82 (South Korea)', value: '+82' },
  { label: '🇹🇭 +66 (Thailand)', value: '+66' },
  { label: '🇻🇳 +84 (Vietnam)', value: '+84' },
  { label: '🇵🇰 +92 (Pakistan)', value: '+92' },
  { label: '🇧🇩 +880 (Bangladesh)', value: '+880' },
  { label: '🇪🇬 +20 (Egypt)', value: '+20' },
  { label: '🇳🇬 +234 (Nigeria)', value: '+234' },
  { label: '🇰🇪 +254 (Kenya)', value: '+254' },
  { label: '🇲🇦 +212 (Morocco)', value: '+212' },
  { label: '🇮🇱 +972 (Israel)', value: '+972' },
  { label: '🇬🇷 +30 (Greece)', value: '+30' },
  { label: '🇵🇱 +48 (Poland)', value: '+48' },
  { label: '🇸🇪 +46 (Sweden)', value: '+46' },
  { label: '🇳🇴 +47 (Norway)', value: '+47' },
  { label: '🇫🇮 +358 (Finland)', value: '+358' },
  { label: '🇮🇪 +353 (Ireland)', value: '+353' },
  { label: '🇩🇰 +45 (Denmark)', value: '+45' },
  { label: '🇭🇺 +36 (Hungary)', value: '+36' },
  { label: '🇧🇪 +32 (Belgium)', value: '+32' },
  { label: '🇨🇭 +41 (Switzerland)', value: '+41' },
  { label: '🇦🇹 +43 (Austria)', value: '+43' },
  { label: '🇪🇸 +34 (Spain)', value: '+34' },
  { label: '🇮🇹 +39 (Italy)', value: '+39' },
  { label: '🇳🇱 +31 (Netherlands)', value: '+31' },
  { label: '🇵🇹 +351 (Portugal)', value: '+351' },
  { label: '🇨🇿 +420 (Czech Republic)', value: '+420' },
  { label: '🇷🇴 +40 (Romania)', value: '+40' },
  { label: '🇸🇰 +421 (Slovakia)', value: '+421' },
  { label: '🇬🇱 +299 (Greenland)', value: '+299' },
  { label: 'Other', value: 'other' },
];

export default function Checkout() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: '',
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expDate: '',
    secCode: '',
    nameOnCard: '',
    upi: '',
    phone: '',
    phoneCountry: '+1', // Default value for phone
  });

  const { closeCart } = useCart();
  const {cartItems, increaseQty, decreaseQty, removeFromCart} = useCart()
  const navigate = useNavigate();

  // Simple required validation
  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = 'Email is required.';
    if (!form.country) newErrors.country = 'Country is required.';
    if (!form.firstName) newErrors.firstName = 'First name is required.';
    if (!form.lastName) newErrors.lastName = 'Last name is required.';
    if (!form.address) newErrors.address = 'Address is required.';
    if (!form.city) newErrors.city = 'City is required.';
    if (!form.state) newErrors.state = 'State is required.';
    if (!form.zip) newErrors.zip = 'ZIP code is required.';
    if (paymentMethod === 'credit') {
      if (!form.cardNumber) newErrors.cardNumber = 'Card number is required.';
      if (!form.expDate) newErrors.expDate = 'Expiration date is required.';
      if (!form.secCode) newErrors.secCode = 'Security code is required.';
      if (!form.nameOnCard) newErrors.nameOnCard = 'Name on card is required.';
    }
    if (paymentMethod === 'paypal') {
      if (!form.upi) newErrors.upi = 'UPI ID required for PayPal.';
    }
    if (!form.phone) newErrors.phone = 'Phone is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayNow = () => {
    if (!validate()) {
      setShowSuccess(false);
      return;
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  // Change handler for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
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
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <button
              type="button"
              className="checkout-signin-link"
              onClick={() => {
                closeCart();
                navigate('/login');
              }}
              style={{
                background: "none", border: "none", color: "#007bff",
                cursor: "pointer", textDecoration: "underline"
              }}
            >
              Sign in
            </button>
          </div>
          {errors.email && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.email}</div>}
          <div className="checkout-checkbox-row">
            <input type="checkbox" id="news1" checked readOnly />
            <label htmlFor="news1">Email me with news and offers</label>
          </div>
        </div>

        <div className="checkout-section">
          <h2>Delivery</h2>
          <div className="checkout-input-row">
            <select name="country" value={form.country} onChange={handleChange}>
              <option value="">Select country</option>
              {countryOptions.map((country, i) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          {errors.country && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.country}</div>}
          <div className="checkout-input-row">
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
          {errors.firstName && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.firstName}</div>}
          {errors.lastName && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.lastName}</div>}
          <div className="checkout-input-row">
            <input
              type="text"
              placeholder="Company (optional)"
              name="company"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </div>
          {errors.address && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.address}</div>}
          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            name="apartment"
            onChange={handleChange}
          />
          <div className="checkout-input-row">
            <input
              type="text"
              placeholder="City"
              name="city"
              value={form.city}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="State"
              name="state"
              value={form.state}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="ZIP code"
              name="zip"
              value={form.zip}
              onChange={handleChange}
            />
          </div>
          {errors.city && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.city}</div>}
          {errors.state && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.state}</div>}
          {errors.zip && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.zip}</div>}
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
                <input
                  type="text"
                  placeholder="Card number"
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                />
              </div>
              {errors.cardNumber && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.cardNumber}</div>}
              <div className="checkout-input-row">
                <input
                  type="text"
                  placeholder="Expiration date (MM / YY)"
                  name="expDate"
                  value={form.expDate}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Security code"
                  name="secCode"
                  value={form.secCode}
                  onChange={handleChange}
                />
              </div>
              {errors.expDate && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.expDate}</div>}
              {errors.secCode && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.secCode}</div>}
              <input
                type="text"
                placeholder="Name on card"
                name="nameOnCard"
                value={form.nameOnCard}
                onChange={handleChange}
              />
              {errors.nameOnCard && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.nameOnCard}</div>}
            </>
          )}
          {paymentMethod === 'paypal' && (
            <div className="checkout-input-row">
              <input
                type="text"
                placeholder="Enter UPI ID (e.g. yourname@bank)"
                name="upi"
                value={form.upi}
                onChange={handleChange}
              />
              {errors.upi && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.upi}</div>}
            </div>
          )}
          {/* No extra fields for Cash on Delivery */}
        </div>

        <div className="checkout-section">
          <h2>Remember me</h2>
          <div className="checkout-checkbox-row">
            <input type="checkbox" id="remember" readOnly />
            <label htmlFor="remember">Save my information for a faster checkout with a Shop account</label>
          </div>
          <div className="checkout-input-row">
            <select
              className="checkout-phone-country"
              name="phoneCountry"
              value={form.phoneCountry}
              onChange={handleChange}
            >
              {phoneOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Phone number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          {errors.phone && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.phone}</div>}
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
          <div >

            {cartItems.map(item => (
              <div key={item.id} className="checkout-cart-item">
                <img src={item.image} alt="item-img" className="checkout-cart-img"/>
                <div>
                  <div> {item.name}</div>
                  <div>$ {item.price}</div>
                   <div className="cart-item-actions">
                      <button onClick={() => decreaseQty(item.id)} aria-label={`Decrease quantity of ${item.name}`}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)} aria-label={`Increase quantity of ${item.name}`}>+</button>
                  </div>
                </div>
                <button className="cart-remove-btn" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`}><FaTimes /></button>
              </div>
            ))}
          </div>
          
        </div>

        <hr />


        <div className="checkout-sidebar-discount">
          <input type="text" placeholder="Discount code or gift card" />
          <button className="checkout-apply-btn" disabled>Apply</button>
        </div>

        <div className="checkout-sidebar-totals">
          <div>Subtotal<span>$ {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span></div>
          <div>Shipping Cost <span>Free</span></div>
          <hr />
          <div className="checkout-total-row">
            <b>Total</b> <span className="checkout-total-price">USD $ {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}
