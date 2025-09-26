
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
function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      
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


        <Route 
          path="/Women" 
          element={
            <>
              <Women />
              <Footer />
            </>
          } 
        />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
