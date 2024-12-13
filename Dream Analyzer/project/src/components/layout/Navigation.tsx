import React from 'react';
import { Brain, BookOpen, LineChart } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'analyzer', label: 'Dream Analyzer', icon: LineChart },
    { id: 'description', label: 'Dream Description', icon: BookOpen },
    { id: 'brain', label: 'Brain & Dreams', icon: Brain },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm mb-6">
      <div className="container mx-auto px-4">
        <div className="flex space-x-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`flex items-center px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === id
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-purple-600'
              }`}
            >
              <Icon className="w-5 h-5 mr-2" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}