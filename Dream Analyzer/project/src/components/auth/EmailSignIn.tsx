import React, { useState } from 'react';
import { useAuth } from './AuthProvider';
import { validateEmail } from '../../utils/validation';
import { LoginCredentials } from '../../types/auth';

export function EmailSignIn() {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(credentials.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // In a real app, this would make an API call
    // For demo, we'll create a mock user
    const mockUser = {
      id: Date.now().toString(),
      name: credentials.email.split('@')[0],
      email: credentials.email,
    };

    login(mockUser);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={credentials.email}
          onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={credentials.password}
          onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="w-full bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700 transition-colors"
      >
        Sign In
      </button>
    </form>
  );
}