import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { CartProvider, useCart } from './context/CartContext'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import CartDrawer from './components/CartDrawer'
import './App.css'

// Internal component for Nav to access context
const Header = () => {
  const { cartCount, toggleCart } = useCart();

  return (
    <header>
      <nav>
        <h1>Makhana Magic</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
          <li>
            <button onClick={toggleCart} className="nav-cart-btn">
              Cart
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
          </Routes>

          <CartDrawer />

          <footer>
            <p>&copy; 2024 Makhana Factory. Crafted with ❤️ for Health.</p>
          </footer>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
