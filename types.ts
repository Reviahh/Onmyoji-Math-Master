
export enum SubjectType {
  LINEAR_ALGEBRA = 'LINEAR_ALGEBRA',
  CALCULUS = 'CALCULUS',
  PROBABILITY = 'PROBABILITY',
  REAL_ANALYSIS = 'REAL_ANALYSIS',
  COMPLEX_ANALYSIS = 'COMPLEX_ANALYSIS',
  SET_THEORY = 'SET_THEORY',
  CATEGORY_THEORY = 'CATEGORY_THEORY'
}

export interface ScenarioDetail {
  label: string; // e.g. "Case A: 满暴"
  description: string; // The specific setup
  result: string; // The outcome
}

export interface CombatScenario {
  intro: string; // General problem statement
  correct: ScenarioDetail; // The positive example
  incorrect: ScenarioDetail; // The negative example
  mathAnalysis: string; // Why the math makes one work and the other fail
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
