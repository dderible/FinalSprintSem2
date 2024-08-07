import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Productdetails } from './pages/shop/productdetails';
import { Shoppingcart } from './pages/cart/shoppingcart';

function App() {
  return (
    <div className = "App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/shop' element={<Productdetails />} />
          <Route path="/cart" element={<Shoppingcart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
