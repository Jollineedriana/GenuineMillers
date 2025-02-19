import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/v1/customer/login', { email, password })
      .then(response => {
        const { access_token } = response.data;
        localStorage.setItem('token', access_token); // Save JWT in localStorage
        setErrorMessage('');
        setSuccessMessage('Login successful! Redirecting...');

        // Fetch user profile after login
        axios.get('http://localhost:5000/api/v1/customer/profile', {
          headers: { Authorization: `Bearer ${access_token}` }
        })
        .then(profileResponse => {
          setUserAvatar(profileResponse.data.avatar); // Assuming avatar URL is in profile data

          // Redirect after displaying success message
          setTimeout(() => navigate('/products'), 2000); // 2-second delay
        })
        .catch(profileError => {
          console.error("Error fetching profile:", profileError);
        });
      })
      .catch(error => {
        setErrorMessage(error.response ? error.response.data.message : 'An error occurred. Please try again.');
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {userAvatar && (
        <div className="avatar-container">
          <img src={userAvatar} alt="User Avatar" className="user-avatar" />
          <p>Welcome back!</p>
        </div>
      )}
      <div className="register-link">
        Don't have an account? <a href="/register">Create an account</a>
      </div>
    </div>
  );
}

export default Login;
