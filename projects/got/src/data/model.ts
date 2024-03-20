type CharacterType = 'king' | 'Fighter' | 'Conselor' | 'Squire;';

export interface Character {
  isAlive: boolean;
  message: string;
  name: string;
  family: string;
  age: number;
  category: CharacterType | '';
  reignYears?: number;
  weapon?: string;
  skillLevel?: number;
  adviseTo?: CharacterType | '';
  servesTo?: CharacterType | '';
  serveLevel?: number;
}

export interface King extends Character {
  reignYears: number;
}

export interface Fighter extends Character {
  weapon: string;
  skillLevel: number;
}
export interface Conselor extends Character {
  adviseTo: CharacterType | '';
}
export interface Squire extends Character {
  servesTo: CharacterType | '';
  serveLevel: number;
}
