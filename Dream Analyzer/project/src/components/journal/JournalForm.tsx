import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { useAuth } from '../auth/AuthProvider';

interface JournalEntry {
  id: string;
  content: string;
  date: string;
  userId: string;
}

export function JournalForm() {
  const { user, isAuthenticated } = useAuth();
  const [content, setContent] = useState('');

  const handleSave = () => {
    if (!isAuthenticated || !user) {
      alert('Please sign in to save your journal entry');
      return;
    }

    const entry: JournalEntry = {
      id: Date.now().toString(),
      content,
      date: new Date().toISOString(),
      userId: user.id,
    };

    // In a real app, this would save to a backend
    const savedEntries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
    localStorage.setItem('journalEntries', JSON.stringify([...savedEntries, entry]));
    
    setContent('');
    alert('Journal entry saved successfully!');
  };

  if (!isAuthenticated) {
    return (
      <div className="text-center p-4">
        Please sign in to write in your journal
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your dream journal entry here..."
          className="w-full h-48 p-4 mb-4 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Save size={20} />
          Save Entry
        </button>
      </div>
    </div>
  );
}