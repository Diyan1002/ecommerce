import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './pages/Shop';
import Singleproduct from "./pages/Singleproduct";
import ComparePage from './pages/ComparePage';
import Cart from "./pages/Cart";
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Blog from './pages/Blog';


const App = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:1" element={<Singleproduct />} />
        <Route path="/compare/:id" element={<ComparePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App
