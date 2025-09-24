
import Navbar from './sections/Navbar'
import Homepage from './sections/Homepage'
import Header from './components/Header'
import Footer from './components/footer'
import Homeproduct from './Homeproduct';
import ProductCard from './components/ProductCard';
import './App.css';


function App() {
  


  return ( 
    <>
       <Header />
    <Navbar/>
    <Homepage/>
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
