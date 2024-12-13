export interface Dream {
  id: string;
  content: string;
  date: string;
  userId: string;
  emotions: Emotion[];
  symbols: Symbol[];
  interpretation: string;
}

export interface Emotion {
  type: 'joy' | 'fear' | 'sadness' | 'anxiety' | 'peace' | 'confusion';
  intensity: number; // 1-5
}

export interface Symbol {
  name: string;
  meaning: string;
  frequency: number;
}

export interface DreamAnalysis {
  symbols: Symbol[];
  emotions: Emotion[];
  interpretation: string;
  recommendations: string[];
}