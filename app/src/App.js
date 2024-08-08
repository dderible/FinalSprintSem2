import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Productdetails } from './components/pages/shop/productdetails';
import { Shoppingcart } from './components/pages/cart/shoppingcart';

function App() {
  return (
    <div className = "App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<productList />} />
          <Route path='/shop' element={<Productdetails />} />
          <Route path="/cart" element={<Shoppingcart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
