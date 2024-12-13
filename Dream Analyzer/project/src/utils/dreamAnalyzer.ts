import type { Dream, DreamAnalysis, Symbol, Emotion } from '../types/dream';

const commonSymbols: Record<string, string> = {
  water: 'Represents emotions, the unconscious mind, or spiritual aspects of life',
  flying: 'Symbolizes freedom, transcendence, or escape from limitations',
  falling: 'Indicates loss of control, anxiety, or letting go',
  teeth: 'Related to confidence, power, or anxiety about appearance',
  house: 'Represents the self, personality, or personal life space',
};

export function analyzeDream(content: string): DreamAnalysis {
  const symbols = findSymbols(content.toLowerCase());
  const emotions = detectEmotions(content.toLowerCase());
  const interpretation = generateInterpretation(symbols, emotions);
  const recommendations = generateRecommendations(symbols, emotions);

  return {
    symbols,
    emotions,
    interpretation,
    recommendations,
  };
}

function findSymbols(content: string): Symbol[] {
  return Object.entries(commonSymbols)
    .filter(([symbol]) => content.includes(symbol))
    .map(([name, meaning]) => ({
      name,
      meaning,
      frequency: (content.match(new RegExp(name, 'g')) || []).length,
    }));
}

function detectEmotions(content: string): Emotion[] {
  const emotionKeywords = {
    joy: ['happy', 'joy', 'delight', 'excited', 'pleasure'],
    fear: ['scared', 'fear', 'terror', 'dread', 'afraid'],
    sadness: ['sad', 'grief', 'sorrow', 'depressed', 'melancholy'],
    anxiety: ['anxious', 'worried', 'nervous', 'stress', 'panic'],
    peace: ['calm', 'peace', 'serene', 'tranquil', 'relaxed'],
    confusion: ['confused', 'uncertain', 'puzzled', 'lost', 'bewildered'],
  };

  return Object.entries(emotionKeywords)
    .map(([emotion, keywords]) => {
      const intensity = keywords.reduce((acc, keyword) => {
        return acc + (content.includes(keyword) ? 1 : 0);
      }, 0);

      return {
        type: emotion as Emotion['type'],
        intensity: Math.min(Math.max(intensity, 1), 5),
      };
    })
    .filter(emotion => emotion.intensity > 0);
}

function generateInterpretation(symbols: Symbol[], emotions: Emotion[]): string {
  const symbolInterpretations = symbols
    .map(s => `The presence of ${s.name} suggests ${s.meaning.toLowerCase()}.`)
    .join(' ');

  const emotionalAnalysis = emotions
    .map(e => `There are strong feelings of ${e.type} (intensity: ${e.intensity}/5).`)
    .join(' ');

  return `${symbolInterpretations} ${emotionalAnalysis}`;
}

function generateRecommendations(symbols: Symbol[], emotions: Emotion[]): string[] {
  const recommendations: string[] = [];

  if (emotions.some(e => e.type === 'anxiety' || e.type === 'fear')) {
    recommendations.push('Consider practicing relaxation techniques before bed.');
  }

  if (emotions.some(e => e.type === 'confusion')) {
    recommendations.push('Keep a dream journal to track recurring patterns.');
  }

  if (emotions.some(e => e.type === 'peace')) {
    recommendations.push('This positive dream state can be enhanced through meditation.');
  }

  return recommendations;
}