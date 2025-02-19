import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Products from './components/Products';
import Register from './components/Register';  // Import Register component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginUser = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/register" element={<Register />} /> {/* Add the Register route */}
        <Route
          path="/products"
          element={isAuthenticated ? <Products /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
