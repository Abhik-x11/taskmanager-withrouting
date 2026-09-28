import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { useTasks } from '../context/useTasks';
import './AppLayout.css';

/**
 * AppLayout Component (Master Layout Route)
 * Provides global navigation bar, active link indicators, auth status, and renders nested routes via <Outlet />.
 */
export default function AppLayout() {
  const { isAuthenticated, user, logout } = useAuth();
  const { tasks } = useTasks();
  const navigate = useNavigate();

  const pendingCount = tasks.filter((t) => t.status !== 'Completed').length;
  const completedCount = tasks.filter((t) => t.status === 'Completed').length;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="taskflow-app-layout">
      {/* Global Top Navbar */}
      <header className="taskflow-header">
        <div className="container header-container">
          
          {/* Logo & Brand */}
          <NavLink to="/" className="brand-logo-link">
            <span className="brand-icon">⚡</span>
            <div>
              <div className="brand-name-row">
                <span className="brand-name">TaskFlow</span>
                <span className="assignment-tag">Assignment 6</span>
              </div>
              <span className="brand-tagline">React Router &bull; Nested &bull; Dynamic</span>
            </div>
          </NavLink>

          {/* Navigation Links using NavLink for active link styling */}
          <nav className="header-nav" aria-label="Main Navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <span>📊 Dashboard</span>
            </NavLink>

            <NavLink
              to="/tasks"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <span>📋 Tasks</span>
              {pendingCount > 0 && <span className="nav-pill-badge">{pendingCount}</span>}
            </NavLink>

            <NavLink
              to="/add-task"
              className={({ isActive }) => `nav-link add-link ${isActive ? 'active' : ''}`}
              title="Protected Route: Requires authentication"
            >
              <span>➕ Add Task</span>
            </NavLink>

            <NavLink
              to="/completed"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <span>✅ Completed</span>
              {completedCount > 0 && <span className="nav-pill-completed">{completedCount}</span>}
            </NavLink>
          </nav>

          {/* Authentication Status & Controls */}
          <div className="header-auth-actions">
            {isAuthenticated ? (
              <div className="user-profile-badge">
                <div className="user-avatar-circle">
                  {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="user-info-text">
                  <span className="user-name">{user?.name || 'User'}</span>
                  <span className="user-status-online">Online</span>
                </div>
                <button
                  type="button"
                  className="auth-btn logout-btn"
                  onClick={handleLogout}
                  title="Log out of session"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink to="/login" className="btn btn-secondary auth-login-btn">
                <span>🔒 Login</span>
              </NavLink>
            )}
          </div>

        </div>
      </header>

      {/* Main Outlet: Renders the active Nested Route page component */}
      <main className="main-content-outlet">
        <Outlet />
      </main>

      {/* Global Footer */}
      <footer className="taskflow-footer container">
        <div className="footer-row">
          <span>TaskFlow Manager &bull; Assignment 6: React Router, Nested &amp; Dynamic Routes</span>
          <div className="footer-badges">
            <span className="footer-pill">URL Parameters (:taskId)</span>
            <span className="footer-pill">Protected Routes</span>
            <span className="footer-pill">Nested Layout Outlet</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
