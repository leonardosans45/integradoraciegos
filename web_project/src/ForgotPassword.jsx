import React, { useState } from 'react';
import './login.css';

function ForgotPassword({ onGoToLogin }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el email de recuperación
    console.log('Password reset request for:', email);
    setMessage('If an account with this email exists, you will receive password reset instructions.');
    setIsSubmitted(true);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Reset Password</h2>
        <h3>Enter your email to receive password reset instructions.</h3>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address"
              />
            </div>
            <button type="submit" className="login-submit-btn">
              Send Reset Instructions
            </button>
          </form>
        ) : (
          <div className="reset-message">
            <p style={{ 
              color: '#28a745', 
              textAlign: 'center', 
              marginBottom: '20px',
              padding: '15px',
              backgroundColor: '#d4edda',
              border: '1px solid #c3e6cb',
              borderRadius: '4px'
            }}>
              {message}
            </p>
            <button 
              type="button" 
              onClick={onGoToLogin}
              className="login-submit-btn"
            >
              Return to Login
            </button>
          </div>
        )}
        
        <div className="login-links">
          <button 
            type="button" 
            onClick={onGoToLogin}
            className="signup-link-btn"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
