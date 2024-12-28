import React, { useState } from 'react';
import Accessories from './Accessories';
import Fruits from './Fruits';
import Mens from './Mens';

export default function App() {
  const [activeComponent, setActiveComponent] = useState('fruits'); 
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className='back'>
      <h1>DD Shopping</h1>

      {}
      <div className='mainbar'>
        <ul>
          <li><a href="#home" onClick={() => setActiveComponent('home')}>Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li style={{ float: 'right' }}>
            <a className="active" href="#about">About</a>
          </li>
        </ul>
      </div>

      {/* Search Bar */}
      <div className='search-bar'>
        <input 
          type="text" 
          placeholder="Search for products..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {}
      <div className='component-selector'>
        <button onClick={() => setActiveComponent('fruits')}>Fruits</button>
        <button onClick={() => setActiveComponent('accessories')}>Accessories</button>
        <button onClick={() => setActiveComponent('mens')}>Mens</button>
      </div>

      {}
      <div className="component-display">
        {activeComponent === 'fruits' && <Fruits />}
        {activeComponent === 'accessories' && <Accessories />}
        {activeComponent === 'mens' && <Mens />}
        {activeComponent === 'home' && <h2>Welcome to DD Shopping Home Page!</h2>}
      </div>
    </div>
  );
}
