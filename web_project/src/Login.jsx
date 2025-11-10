import React, { useState } from 'react';
import './login.css';

function Login({ onGoToSignUp, onGoToForgotPassword }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome back</h2>
        <h3>Login to access your smart cane features.</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-submit-btn">
            Login
          </button>
        </form>
        <div className="login-links">
          <button 
            type="button" 
            onClick={onGoToForgotPassword}
            className="signup-link-btn"
          >
            Forgot Password?
          </button>
          <button 
            type="button" 
            onClick={onGoToSignUp}
            className="signup-link-btn"
          >
            Don't have an account? Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
