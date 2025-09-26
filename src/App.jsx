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
import Chat from './components/chat';
import Login from './sections/Login';



function App() {
  
  return (
    <Router>
  <Header />
  <Navbar />
  <Chat />
      
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
  );
}

export default App;
