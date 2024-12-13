import React from 'react';
import { Brain } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '../auth/AuthProvider';

export function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dream Analyzer</h1>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {isAuthenticated && (
              <button
                onClick={logout}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}