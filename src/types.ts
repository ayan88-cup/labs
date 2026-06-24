export type VulnerabilityCategory = 'Web' | 'Network' | 'Cryptography' | 'OSINT' | 'System' | 'AI' | 'Cloud';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: VulnerabilityCategory;
  difficulty: Difficulty;
  completed: boolean;
  lessons: string[];
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  category: VulnerabilityCategory;
  content: string;
  tags: string[];
}

export type ViewState = 'dashboard' | 'challenge' | 'knowledge-base';
