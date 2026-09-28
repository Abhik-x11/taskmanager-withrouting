import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import './LoginPage.css';

/**
 * LoginPage Component (/login)
 * Supports authentication for the Protected Route assignment requirement.
 */
export default function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('demo.architect@taskflow.dev');
  const [password, setPassword] = useState('password123');

  // Determine where to redirect after login
  const from = location.state?.from?.pathname || '/tasks';

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate(from, { replace: true });
  };

  const handleOneClickDemo = () => {
    login('demo.architect@taskflow.dev', 'password123');
    navigate(from, { replace: true });
  };

  return (
    <div className="login-page container">
      
      <div className="login-card">
        <div className="login-badge-icon">🔒</div>
        
        <h1 className="login-title">Protected Route Authentication</h1>
        <p className="login-subtitle">
          {location.state?.from ? (
            <>
              You attempted to access <code className="target-path">{location.state.from.pathname}</code>, which requires an authenticated session.
            </>
          ) : (
            'Sign in to access task creation and protected project controls.'
          )}
        </p>

        {isAuthenticated && (
          <div className="already-logged-in-alert">
            <span>✅ You are currently authenticated.</span>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate(from)}
            >
              Continue to {from}
            </button>
          </div>
        )}

        {/* Quick 1-Click Demo Login Box */}
        <div className="demo-login-box">
          <div className="demo-login-info">
            <span className="demo-tag">FOR EVALUATORS</span>
            <p className="demo-text">Click below to bypass manual entry and test protected routing instantly:</p>
          </div>
          <button
            type="button"
            className="btn btn-primary demo-login-btn"
            onClick={handleOneClickDemo}
          >
            ⚡ 1-Click Demo Login &amp; Proceed
          </button>
        </div>

        <div className="divider-row">
          <span>OR SIGN IN MANUALLY</span>
        </div>

        {/* Standard Login Form */}
        <form onSubmit={handleLoginSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label" htmlFor="login-email">Email Address</label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="btn btn-secondary manual-submit-btn">
            Sign In with Credentials
          </button>
        </form>

      </div>

    </div>
  );
}
