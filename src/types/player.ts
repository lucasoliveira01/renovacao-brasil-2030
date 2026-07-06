export type PlayerPosition = 'Goleiro' | 'Defensor' | 'Meio-campo' | 'Atacante';

export interface Player {
  id: string;
  name: string;
  displayName: string;
  club: string;
  position: PlayerPosition;
  birthDate: string; // ISO yyyy-mm-dd
  imageUrl: string;
  sourceGroup: 'Pre-lista 2026' | 'Cortado por lesao' | 'Promessa';
  isRemoved?: boolean;
}
