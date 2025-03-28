import logo from './logo.svg';
import './App.css';
import Navbar from './partials/Navbar';
// import ProductCard from './components/ProductCard';
// import MainCarousel from './components/MainCarousel';
// import Hero from './components/Hero';
// import NewCarousel from './components/NewCarousel';
import ProductDetailsPage from './pages/ProductDetail/ProductDetail';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './partials/Footer';
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Checkout from './pages/Checkout/Checkout'
import Wishlist from './pages/Profile/Wishlist'
function App() {
  return (
   
    
    <div className="max-w-full max-h-full  bg-white relative" > 
      <Navbar  />
      {/* <Hero /> */}
        <Routes>
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="*" element={<Home />} />
        <Route path="/checkout/" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/profile/wishlist" element={<Wishlist />} /> 
        </Routes>
      
     
      <Footer />
  
    </div>

  );
}

export default App;
