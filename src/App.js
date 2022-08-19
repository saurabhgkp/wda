
import './App.css';
import Navbar from './components/Nabvar/Navbar';
import Hero from './components/Hero'
import Review from './components/Review'
import Discount from './components/Discount'
import { Routes, Route } from "react-router-dom";
import FooterPage from './components/FooterPage'
import Product from './components/Product/Product';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Contact from './components/Contact/Contact';
import SingleProduct from './components/Product/SingleProduct';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  >
          <Route path="/" element={<Hero />} />
          <Route path="/" element={<Product />} />
          <Route element={<Review />} />
        </Route >
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route  >
          <Route path="/About" element={<About />} />
          <Route element={<Review />} />
        </Route >
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>


      {/* <Discount /> */}

      <FooterPage />
    </>
  );
}

export default App;
