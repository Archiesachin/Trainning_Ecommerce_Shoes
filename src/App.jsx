import Navbar from './sections/Navbar/Navbar.jsx';
import Homepage from './sections/Homepage/Homepage.jsx';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Men from './sections/Mens Page/Men.jsx';
import Women from './sections/Womens Page/Women.jsx';
import New from './sections/New Arrivals Page/New.jsx';
import SignUp from './sections/Login/SignUp.jsx';
import CartDrawer from './components/Cart/CartDrawer.jsx';
import { CartProvider, useCart } from './components/Cart/CartContext.jsx';
import Chat from './components/ChatBot/chat.jsx';
import Login from './sections/Login/Login.jsx';
import Checkout from './components/Checkout/checkout.jsx';
import SingleProductPage from './sections/Single_Product/SingleProductPage.jsx';


function App() {
  function Layout() {
    const location = useLocation();
    const isCheckout = location.pathname === '/checkout';
    return (
      <>
        {!isCheckout && <Header />}
        {!isCheckout && <Navbar />}
        {!isCheckout && <CartDrawer />}
        {!isCheckout && <Chat />}
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
    );
  }
  return (

    <CartProvider>
      <Router>
        <Layout />

{/* //      <CartProvider>
//     <Router>

//       <Header />
//       <Navbar />
//       <CartDrawer />
//       <Chat />

      
//       <Routes>
//         <Route path="/" element={<Homepage />} />

//         <Route path="/Men" element={<Men />} />

//         <Route path="/Women" element={<Women />}/>

//         <Route path="/signup" element={ <SignUp />} />

//        <Route path="/login" element={ <Login />} />

//         <Route path="/New" element={<New />} />

//         <Route path="/singleProduct" element={<SingleProductPage />} />
          
      

//       </Routes>
//       <Footer/>
//     </Router> */}
</Router>

    </CartProvider>
  );
}

export default App;
