
export enum SubjectType {
  LINEAR_ALGEBRA = 'LINEAR_ALGEBRA',
  CALCULUS = 'CALCULUS',
  PROBABILITY = 'PROBABILITY',
  REAL_ANALYSIS = 'REAL_ANALYSIS'
}

export interface CombatScenario {
  title: string;
  description: string; // The setup
  calculation: string; // The math applied
  result: string; // The in-game outcome
}

export interface Section {
  title: string;
  characterName?: string; // e.g. "Ibaraki Doji"
  characterImage?: string; // URL to image
  content: string; 
  formula?: string; 
  explanation: string;
  analogy: string; 
  combatScenario?: CombatScenario; // Real game example
}

export interface Chapter {
  id: string;
  title: string;
  subject: SubjectType;
  icon: string;
  description: string;
  sections: Section[];
}