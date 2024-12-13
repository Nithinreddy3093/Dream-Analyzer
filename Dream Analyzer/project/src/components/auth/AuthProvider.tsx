import React, { createContext, useContext, useState, useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { AuthState, User } from '../../types/auth';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

interface AuthContextType extends AuthState {
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('dreamUser');
    if (savedUser) {
      setAuthState({
        isAuthenticated: true,
        user: JSON.parse(savedUser),
        loading: false,
        error: null,
      });
    } else {
      setAuthState(prev => ({ ...prev, loading: false }));
    }
  }, []);

  const login = (userData: User) => {
    localStorage.setItem('dreamUser', JSON.stringify(userData));
    setAuthState({
      isAuthenticated: true,
      user: userData,
      loading: false,
      error: null,
    });
  };

  const logout = () => {
    localStorage.removeItem('dreamUser');
    setAuthState({
      isAuthenticated: false,
      user: null,
      loading: false,
      error: null,
    });
  };

  if (!GOOGLE_CLIENT_ID) {
    return <div className="text-red-500">Google Client ID not configured!</div>;
  }

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthContext.Provider value={{ ...authState, login, logout }}>
        {children}
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
}