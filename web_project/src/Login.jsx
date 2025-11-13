import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './login.css';

function Login({ onGoToSignUp, onGoToForgotPassword, onLoginSuccess }) {
  const initialValues = {
    email: '',
    password: ''
  };

  const validate = (values) => {
    const errors = {};

    // Validación de email
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    // Validación de password
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Simular proceso de autenticación
    setTimeout(() => {
      console.log('Login successful:', values);
      setSubmitting(false);
      // Redirigir al mapa después del login exitoso
      onLoginSuccess();
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome back</h2>
        <h3>Login to access your smart cane features.</h3>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className={`form-group ${errors.email && touched.email ? 'error' : touched.email && !errors.email ? 'success' : ''}`}>
                <label htmlFor="email">Email:</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                />
                {touched.email && !errors.email && (
                  <span className="validation-icon success">✓</span>
                )}
                {errors.email && touched.email && (
                  <span className="validation-icon error">✗</span>
                )}
                <ErrorMessage name="email" component="span" className="error-message" />
              </div>
              
              <div className={`form-group ${errors.password && touched.password ? 'error' : touched.password && !errors.password ? 'success' : ''}`}>
                <label htmlFor="password">Password:</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                />
                {touched.password && !errors.password && (
                  <span className="validation-icon success">✓</span>
                )}
                {errors.password && touched.password && (
                  <span className="validation-icon error">✗</span>
                )}
                <ErrorMessage name="password" component="span" className="error-message" />
              </div>
              
              <button type="submit" className="login-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </Form>
          )}
        </Formik>
        
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
