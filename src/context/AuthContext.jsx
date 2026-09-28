import React, { createContext, useState, useEffect } from 'react';

const AUTH_STORAGE_KEY = 'taskflow_auth_v1';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
  });

  const [user, setUser] = useState(() => {
    const isAuth = localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    return isAuth ? { name: 'Alex Johnson', email: 'alex.johnson@example.com', role: 'Lead Architect' } : null;
  });

  useEffect(() => {
    localStorage.setItem(AUTH_STORAGE_KEY, isAuthenticated ? 'true' : 'false');
  }, [isAuthenticated]);

  const login = (email, _password) => {
    setIsAuthenticated(true);
    setUser({
      name: email.split('@')[0] || 'Demo User',
      email: email || 'demo@example.com',
      role: 'Project Manager'
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    isAuthenticated,
    user,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };
