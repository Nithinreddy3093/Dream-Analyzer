import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { useAuth } from '../auth/AuthProvider';
import { analyzeDream } from '../../utils/dreamAnalyzer';
import type { Dream, Emotion } from '../../types/dream';

const emotions: Emotion['type'][] = ['joy', 'fear', 'sadness', 'anxiety', 'peace', 'confusion'];

const emotionColors: Record<Emotion['type'], string> = {
  joy: 'bg-yellow-500',
  fear: 'bg-red-500',
  sadness: 'bg-blue-500',
  anxiety: 'bg-orange-500',
  peace: 'bg-green-500',
  confusion: 'bg-purple-500',
};

export function DreamForm() {
  const { user, isAuthenticated } = useAuth();
  const [content, setContent] = useState('');
  const [selectedEmotions, setSelectedEmotions] = useState<Set<Emotion['type']>>(new Set());
  const [analysis, setAnalysis] = useState<Dream | null>(null);

  const toggleEmotion = (emotion: Emotion['type']) => {
    const newEmotions = new Set(selectedEmotions);
    if (newEmotions.has(emotion)) {
      newEmotions.delete(emotion);
    } else {
      newEmotions.add(emotion);
    }
    setSelectedEmotions(newEmotions);
  };

  const handleAnalyze = () => {
    if (!content.trim()) return;

    const dreamAnalysis = analyzeDream(content);
    const dream: Dream = {
      id: Date.now().toString(),
      content,
      date: new Date().toISOString(),
      userId: user?.id || '',
      emotions: Array.from(selectedEmotions).map(type => ({
        type,
        intensity: 3, // Default intensity
      })),
      symbols: dreamAnalysis.symbols,
      interpretation: dreamAnalysis.interpretation,
    };

    setAnalysis(dream);
  };

  const handleSave = () => {
    if (!isAuthenticated || !user || !analysis) return;

    // In a real app, this would save to a backend
    const savedDreams = JSON.parse(localStorage.getItem('dreams') || '[]');
    localStorage.setItem('dreams', JSON.stringify([...savedDreams, analysis]));
    
    setContent('');
    setSelectedEmotions(new Set());
    setAnalysis(null);
    alert('Dream saved successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Describe your dream..."
          className="w-full h-48 p-4 mb-4 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none dark:bg-gray-700 dark:text-white"
        />

        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">How did you feel in this dream?</h3>
          <div className="flex flex-wrap gap-2">
            {emotions.map(emotion => (
              <button
                key={emotion}
                onClick={() => toggleEmotion(emotion)}
                className={`px-4 py-2 rounded-full text-white transition-all ${
                  emotionColors[emotion]
                } ${
                  selectedEmotions.has(emotion)
                    ? 'opacity-100 scale-105'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                {emotion}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleAnalyze}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Analyze Dream
          </button>
          {analysis && (
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save size={20} />
              Save Dream
            </button>
          )}
        </div>
      </div>

      {analysis && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Dream Analysis</h2>
          
          {analysis.symbols.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Symbols Found:</h3>
              <ul className="list-disc list-inside space-y-2">
                {analysis.symbols.map(symbol => (
                  <li key={symbol.name}>
                    <span className="font-medium">{symbol.name}:</span> {symbol.meaning}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Interpretation:</h3>
            <p className="text-gray-700 dark:text-gray-300">{analysis.interpretation}</p>
          </div>
        </div>
      )}
    </div>
  );
}