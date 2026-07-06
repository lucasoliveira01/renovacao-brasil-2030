import { describe, it, expect } from 'vitest';
import { players } from './players.seed';

describe('players.seed', () => {
  it('não contém IDs duplicados', () => {
    const ids = players.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('todos os jogadores possuem birthDate no formato ISO yyyy-mm-dd', () => {
    const isoPattern = /^\d{4}-\d{2}-\d{2}$/;
    for (const player of players) {
      expect(player.birthDate).toMatch(isoPattern);
    }
  });

  it('todos os jogadores possuem campos obrigatórios preenchidos', () => {
    for (const player of players) {
      expect(player.id).toBeTruthy();
      expect(player.name).toBeTruthy();
      expect(player.displayName).toBeTruthy();
      expect(player.club).toBeTruthy();
      expect(player.position).toBeTruthy();
      expect(player.imageUrl).toBeTruthy();
      expect(player.sourceGroup).toBeTruthy();
    }
  });

  it('Danilo Flamengo e Danilo Botafogo são entidades distintas', () => {
    const danilos = players.filter((p) => p.name === 'Danilo');
    expect(danilos.length).toBe(2);
    const clubes = danilos.map((p) => p.club);
    expect(clubes).toContain('Flamengo');
    expect(clubes).toContain('Botafogo');
  });

  it('Ederson Fenerbahçe e Éderson Atalanta são entidades distintas', () => {
    const edersons = players.filter((p) => p.name.toLowerCase().startsWith('ederson') || p.name.toLowerCase().startsWith('éderson'));
    expect(edersons.length).toBe(2);
    const positions = edersons.map((p) => p.position);
    expect(positions).toContain('Goleiro');
    expect(positions).toContain('Meio-campo');
  });

  it('não há duplicatas de Endrick, Vitor Reis, Andrey Santos e Estêvão', () => {
    const names = ['Endrick', 'Vitor Reis', 'Andrey Santos', 'Estêvão'];
    for (const name of names) {
      const occurrences = players.filter((p) => p.name === name);
      expect(occurrences.length).toBe(1);
    }
  });

  it('lista tem ao menos 60 jogadores', () => {
    expect(players.length).toBeGreaterThanOrEqual(60);
  });
});
