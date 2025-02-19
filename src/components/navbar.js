import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar({ isAuthenticated }) {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        {isAuthenticated ? (
          <li><Link to="/products">Products</Link></li>
        ) : (
          <>
            <li><Link to="/login">Login/Register</Link></li>
            <li><Link to="/products">Products</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
