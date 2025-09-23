
import Navbar from './sections/Navbar'
import Homepage from './sections/Homepage'
import Header from './components/Header'
import Footer from './components/footer'
import GridHomepage from './components/gridHomepage'

import React from 'react';
import Homeproduct from './Homeproduct';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  


  return ( 
    <>
       <Header />
    <Navbar/>
    <Homepage/>
      <GridHomepage />
      <Footer />
    <div className="App">
      {Homeproduct.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  )
}

export default App;
