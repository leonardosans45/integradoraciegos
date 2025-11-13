import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './login.css';

function ForgotPassword({ onGoToLogin }) {
  const initialValues = {
    email: ''
  };

  const validate = (values) => {
    const errors = {};

    // Validación de email
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    // Aquí puedes agregar la lógica para enviar el email de recuperación
    console.log('Password reset request for:', values.email);
    
    // Simular una petición async
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'If an account with this email exists, you will receive password reset instructions.'
      });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Reset Password</h2>
        <h3>Enter your email to receive password reset instructions.</h3>
        
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting, status }) => (
            <>
              {status && status.type === 'success' ? (
                <div className="reset-message">
                  <p className="success-message">
                    {status.message}
                  </p>
                  <button 
                    type="button" 
                    onClick={onGoToLogin}
                    className="login-submit-btn"
                  >
                    Return to Login
                  </button>
                </div>
              ) : (
                <Form>
                  <div className={`form-group ${errors.email && touched.email ? 'error' : touched.email && !errors.email ? 'success' : ''}`}>
                    <label htmlFor="email">Email:</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                    />
                    {touched.email && !errors.email && (
                      <span className="validation-icon success">✓</span>
                    )}
                    {errors.email && touched.email && (
                      <span className="validation-icon error">✗</span>
                    )}
                    <ErrorMessage name="email" component="span" className="error-message" />
                  </div>
                  
                  <button type="submit" className="login-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Reset Instructions'}
                  </button>
                </Form>
              )}
            </>
          )}
        </Formik>
        
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
