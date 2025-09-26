import Navbar from './sections/Navbar';
import Homepage from './sections/Homepage';
import Header from './components/Header';
import Footer from './components/footer';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Men from './sections/Men';
import Women from './sections/Women';
import New from './sections/New';
import SignUp from './sections/SignUp';
import CartDrawer from './components/CartDrawer';
import { CartProvider, useCart } from './components/CartContext.jsx';
import Chat from './components/chat';
import Login from './sections/Login';
import Checkout from './sections/checkout';


function App() {
  const location = useLocation();
  const isCheckout = location.pathname === '/checkout';
  return (
    <CartProvider>
      <>
        {!isCheckout && <Header />}
        {!isCheckout && <Navbar />}
        <CartDrawer />
        <Chat />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/New" element={<New />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {!isCheckout && <Footer />}
      </>
    </CartProvider>
  );
}

export default App;
