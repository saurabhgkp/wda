import "./App.css";
import Navbar from "./components/Nabvar/Navbar";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Discount from "./components/Discount";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import FooterPage from "./components/FooterPage";
import Product from "./components/Product/Product";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Contact from "./components/Contact/Contact";
import SingleProduct from "./components/Product/SingleProduct";
=======
import FooterPage from './components/FooterPage'
import Product from './components/Product/Product';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Contact from './components/Contact/Contact';
import SingleProduct from './components/Product/SingleProduct';
import Navbar2 from './components/Nabvar/Navbar2';
>>>>>>> b17505ff67e351b135f1ce7a2e62fa6c6a4c5b76
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar2/>
      <Routes>
        <Route>
          <Route path="/" element={<Hero />} />
          <Route path="/" element={<Product />} />
          <Route element={<Review />} />
        </Route>
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route>
          <Route path="/About" element={<About />} />
          <Route element={<Review />} />
        </Route>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout/:id" element={<Checkout />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      {/* <Discount /> */}

      <FooterPage />
    </>
  );
}

export default App;
