import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const customerData = {
      name,
      email,
      password,
      shipping_address: shippingAddress,
      billing_address: billingAddress,
      payment_information: paymentInfo
    };

    axios.post('http://localhost:5000/api/v1/customer/register', customerData)
      .then(response => {
        setSuccessMessage(response.data.message);
        setErrorMessage('');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })
      .catch(error => {
        if (error.response) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage('An error occurred. Please try again.');
        }
        setSuccessMessage('');
      });
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleRegister}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <input type="text" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} placeholder="Shipping Address" />
        <input type="text" value={billingAddress} onChange={(e) => setBillingAddress(e.target.value)} placeholder="Billing Address" />
        <input type="text" value={paymentInfo} onChange={(e) => setPaymentInfo(e.target.value)} placeholder="Payment Information" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
