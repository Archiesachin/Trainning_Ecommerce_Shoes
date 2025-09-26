
import React from 'react';

import Navbar from './sections/Navbar';
import Homepage from './sections/Homepage';
import Header from './components/Header';
import Footer from './components/footer';
import Homeproduct from './Homeproduct';
import ProductCard from './components/ProductCard';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Men from './sections/Men';
import Women from './sections/Women';
import New from './sections/New';
import SignUp from './sections/SignUp';
import CartDrawer from './components/CartDrawer';
import { CartProvider, useCart } from './components/CartContext.jsx';

function App() {
  
  return (
     <CartProvider>
    <Router>
      <Header />
      <Navbar />
      <CartDrawer />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Homepage />
            </>
          } 
        />

        <Route 
          path="/Men" 
          element={
            <>
              <Men />
            </>
          } 
        />


        {/* Add similar routes for other sections as you build them */}
        {/* Example: 
        <Route path="/women" element={<Women />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        */}


        <Route 
          path="/Women" 
          element={
            <>
              <Women />
            </>
          } 
        />
        <Route 
          path="/signup" 
          element={
            <>
              <SignUp />
            </>
          } 
        />
        

        <Route 
          path="/New" 
          element={
            <>
              <New />
            </>
          } 
        />
          
      

      </Routes>
      <Footer/>
    </Router>
    </CartProvider>
  );
}

export default App;
