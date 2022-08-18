
import './App.css';
import Navbar from './components/Nabvar/Navbar';
import Hero from './components/Hero'
import Review from './components/Review'
import Banner from './components/Banner'
import { Routes, Route } from "react-router-dom";
import FooterPage from './components/FooterPage'
import Product from './components/Product/Product';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  >
          <Route path="/" element={<Hero />} />
          <Route path="/" element={<Product />} />
        </Route >
      </Routes>

      <Review />
      <Banner />

      <FooterPage />
    </>
  );
}

export default App;
