import React, { useState } from 'react';
import { AuthProvider } from './components/auth/AuthProvider';
import { AuthTabs } from './components/auth/AuthTabs';
import { Header } from './components/layout/Header';
import { Navigation } from './components/layout/Navigation';
import { DreamForm } from './components/dream/DreamForm';
import { BrainInfo } from './components/brain/BrainInfo';
import { useAuth } from './components/auth/AuthProvider';

function AppContent() {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('analyzer');

  const renderContent = () => {
    if (!isAuthenticated) {
      return <AuthTabs />;
    }

    switch (activeTab) {
      case 'analyzer':
        return <DreamForm />;
      case 'description':
        return (
          <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Dream Description Analysis</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our advanced AI analyzes your dream descriptions to identify patterns, symbols,
              and emotional themes. We use both Jungian and modern psychological frameworks
              to provide meaningful insights into your dreams.
            </p>
          </div>
        );
      case 'brain':
        return <BrainInfo />;
      default:
        return <DreamForm />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 dark:from-purple-900 dark:to-blue-900">
      <Header />
      {isAuthenticated && <Navigation activeTab={activeTab} onTabChange={setActiveTab} />}
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;