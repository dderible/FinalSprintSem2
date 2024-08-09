import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Navbar2 } from './components/navbar2';
import Productdetails from './components/pages/shop/productdetails';
import { Shoppingcart } from './components/pages/cart/shoppingcart';
import { Checkout } from './components/pages/checkout/checkout';
import ProductList from './components/productlist';

function App() {
  return (
    <div className = "App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path='/shop' element={<Productdetails />} />
          <Route path="/cart" element={<Shoppingcart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      <Navbar2 />
      </Router>
    </div>
  );
}

export default App
