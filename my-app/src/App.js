
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, NavLink } from 'react-router-dom';
import FruitsCart from './FruitsCart';
import MensCart from './MensCart';
import AccessoriesCard from './AccessoriesCard';
import WomensCart from './WomensCart';
import CartProducts from './CartProducts';
import MyOrder from './MyOrder';
import Footer from './Footer';
import {LoginPage,SignUpPage} from './Login';
import {LogoutPage} from './Logout';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cartItems')) || []);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('authToken'));
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const cleanPrice = Number(item.price.replace(/[^\d.]/g, '')) || 0;
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      return existingItem
        ? prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...prevCart, { ...item, price: cleanPrice, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
  };

  const updateQuantity = (item, change) => {
    setCartItems((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: Math.max(1, cartItem.quantity + change) }
          : cartItem
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const handleLogin = (token) => {
    localStorage.setItem('authToken', token);
    setIsLoggedIn(true);
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="app-container">
      <header className="mainbar">
        <div className="logo">
          <h1>🛍️ ShopEasy</h1>
        </div>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="button search-button" onClick={handleSearch}>🔍 Search</button>
        </div>
        <div className="cart-container">
          <button className="cart-button" onClick={() => navigate('/cart')}>🛒 Cart ({cartItems.length})</button>
        </div>
        <nav>
          <ul className="nav-links">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink></li>
            <li><NavLink to="/myorder" className={({ isActive }) => (isActive ? 'active-link' : '')}>My Orders</NavLink></li>
            {isLoggedIn ? (
              <li><NavLink to="/logout" className={({ isActive }) => (isActive ? 'active-link' : '')}>Logout</NavLink></li>
            ) : (
              <>
                <li><NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : '')}>Login</NavLink></li>
                <li><NavLink to="/signup" className={({ isActive }) => (isActive ? 'active-link' : '')}>SignUp</NavLink></li>
              </>
            )}
          </ul>
        </nav>
      </header>

      <div className="component-selector">
        <button onClick={() => navigate('/fruits')}>Fruits</button>
        <button onClick={() => navigate('/accessories')}>Accessories</button>
        <button onClick={() => navigate('/mens')}>Mens</button>
        <button onClick={() => navigate('/women')}>Women</button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fruits" element={<FruitsCart addToCart={addToCart} />} />
        <Route path="/accessories" element={<AccessoriesCard addToCart={addToCart} />} />
        <Route path="/mens" element={<MensCart addToCart={addToCart} />} />
        <Route path="/women" element={<WomensCart addToCart={addToCart} />} />
        <Route path="/cart" element={<CartProducts cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart} setPurchasedItems={setPurchasedItems} />} />
        <Route path="/myorder" element={<MyOrder purchasedItems={purchasedItems} />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpPage onLogin={handleLogin} />} />
        <Route path="/logout" element={<LogoutPage onLogout={handleLogout} />} />
      </Routes>

      <Footer />
    </div>
  );
}

function Home() {
  return (
    <div className="home-page">
      <h2>Welcome to ShopEasy!</h2>
      <p>Discover the latest in fruits, accessories, menswear, and womenswear. Start shopping now!</p>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h3>Featured Products</h3>
        <div className="product-list">
          <div className="product-item">
            <img src="https://media.istockphoto.com/id/1273378551/photo/set-of-summer-fruits-and-berries-in-wooden-serving.jpg?b=1&s=612x612&w=0&k=20&c=QQQUsLFUFfTQeW0FQf-I5BnbGPJTvyMbCvgVbA7zrew=" alt="Fresh Fruits" />
            <h4>Fresh Fruits</h4>
            <p>Organic, farm-fresh fruits for a healthy lifestyle.</p>
            <button className="button">Shop Now</button>
          </div>
          <div className="product-item">
            <img src="https://images.pexels.com/photos/3184463/pexels-photo-3184463.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Stylish Accessories" />
            <h4>Stylish Accessories</h4>
            <p>Complete your look with our trendy accessories.</p>
            <button className="button">Shop Now</button>
          </div>
          <div className="product-item">
            <img src="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Menswear Collection" />
            <h4>Menswear Collection</h4>
            <p>Explore our curated collection of menswear for every occasion.</p>
            <button className="button">Shop Now</button>
          </div>
          <div className="product-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1LC--V14Li8D-nKByhltLVxgLT2kI_Mphg&s" alt="Womenswear Fashion" />
            <h4>Womenswear Fashion</h4>
            <p>Find the perfect outfit from our womenswear collection.</p>
            <button className="button">Shop Now</button>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="promotions">
        <h3>Special Promotions</h3>
        <div className="promotion-item">
          <h4>Buy 1 Get 1 Free on Fruits</h4>
          <p>Get a free fruit basket when you buy a selection of fresh fruits! Don't miss out on this limited-time offer.</p>
        </div>
        <div className="promotion-item">
          <h4>50% Off on Selected Accessories</h4>
          <p>Update your wardrobe with our discounted accessories collection. Grab the deal now!</p>
        </div>
      </section>

      {/* Why ShopEasy Section */}
      <section className="why-shop-easy">
        <h3>Why ShopEasy?</h3>
        <ul>
          <li>🛒 A wide range of products from fresh produce to stylish fashion items.</li>
          <li>🔒 Secure payments and hassle-free returns.</li>
          <li>🚚 Fast and reliable shipping to your doorstep.</li>
          <li>💳 Multiple payment options to choose from.</li>
          <li>⭐ Excellent customer service and support.</li>
        </ul>
      </section>

      {/* Customer Testimonials Section */}
      <section className="testimonials">
        <h3>What Our Customers Say</h3>
        <div className="testimonial-item">
          <p>"ShopEasy has made shopping online so much easier. I love the variety of products and quick delivery!"</p>
          <p><strong>- Emily, Happy Shopper</strong></p>
        </div>
        <div className="testimonial-item">
          <p>"The quality of their menswear collection is outstanding. I always find something stylish to wear!"</p>
          <p><strong>- John, Satisfied Customer</strong></p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h3>Ready to Shop?</h3>
        <p>Start exploring the latest products and enjoy exclusive discounts when you shop now!</p>
        <button className="button">Shop Now</button>
      </section>
    </div>
  );
}


function Cart({ cartItems, removeFromCart, updateQuantity, clearCart, setPurchasedItems }) {
  return cartItems.length === 0 ? (
    <div className="empty-cart">
      <h2>Your cart is empty</h2>
      <p>Browse products to add items to your cart.</p>
    </div>
  ) : (
    <CartProducts cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart} setPurchasedItems={setPurchasedItems} />
  );
}
function About() {
  return (
    <div className="about-page">
      <h2>About ShopEasy</h2>
      <p>ShopEasy is your one-stop shop for a wide variety of products, including fruits, accessories, menswear, and womenswear.</p>
      <h3>Our Mission</h3>
      <p>To make shopping fun, easy, and accessible to everyone around the world.</p>
      <h3>Contact Us</h3>
      <p>Email: support@shopeasy.com</p>
    </div>
  );
}




export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
