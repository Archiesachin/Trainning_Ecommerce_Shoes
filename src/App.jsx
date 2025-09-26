import Navbar from './sections/Navbar';
import Homepage from './sections/Homepage';
import Header from './components/Header';
import Footer from './components/footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Men from './sections/Men';
import Women from './sections/Women';
import New from './sections/New';
import SignUp from './sections/SignUp';
import CartDrawer from './components/CartDrawer';
import { CartProvider, useCart } from './components/CartContext.jsx';
import Login from './sections/Login';


function App() {
  
  return (
     <CartProvider>
    <Router>
      <Header />
      <Navbar />
      <CartDrawer />
      
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/Men" element={<Men />} />

        <Route path="/Women" element={<Women />}/>

        <Route path="/signup" element={ <SignUp />} />

       <Route path="/login" element={ <Login />} />

        <Route path="/New" element={<New />} />
          
      

      </Routes>
      <Footer/>
    </Router>
    </CartProvider>
  );
}

export default App;
