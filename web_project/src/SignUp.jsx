import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './login.css';

function SignUp({ onGoToLogin }) {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validate = (values) => {
    const errors = {};

    // Validación de nombre
    if (!values.name) {
      errors.name = 'Name is required';
    } else if (values.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    } else if (!/^[a-zA-ZÀ-ÿ\s]*$/.test(values.name)) {
      errors.name = 'Name can only contain letters and spaces';
    }

    // Validación de email
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    // Validación de password
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(values.password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    // Validación de confirmación de password
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Aquí puedes agregar la lógica de registro
    console.log('Sign up attempt:', values);
    setSubmitting(false);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Create Account</h2>
        <h3>Sign up to access your smart cane features.</h3>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className={`form-group ${errors.name && touched.name ? 'error' : touched.name && !errors.name ? 'success' : ''}`}>
                <label htmlFor="name">Name:</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                />
                {touched.name && !errors.name && (
                  <span className="validation-icon success">✓</span>
                )}
                {errors.name && touched.name && (
                  <span className="validation-icon error">✗</span>
                )}
                <ErrorMessage name="name" component="span" className="error-message" />
              </div>

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

              <div className={`form-group ${errors.confirmPassword && touched.confirmPassword ? 'error' : touched.confirmPassword && !errors.confirmPassword ? 'success' : ''}`}>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                />
                {touched.confirmPassword && !errors.confirmPassword && (
                  <span className="validation-icon success">✓</span>
                )}
                {errors.confirmPassword && touched.confirmPassword && (
                  <span className="validation-icon error">✗</span>
                )}
                <ErrorMessage name="confirmPassword" component="span" className="error-message" />
              </div>

              <button type="submit" className="login-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Creating Account...' : 'Sign Up'}
              </button>
            </Form>
          )}
        </Formik>
        
        <div className="login-links">
          <button 
            type="button" 
            onClick={onGoToLogin}
            className="signup-link-btn"
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
