import { describe, it, expect } from 'vitest';
import { calculateAgeAtDate } from '../utils/calculateAgeAtDate';

describe('calculateAgeAtDate', () => {
  it('calcula corretamente o exemplo do INSTRUCTIONS (19 anos)', () => {
    expect(calculateAgeAtDate('2007-04-24', '2026-07-06')).toBe(19);
  });

  it('calcula corretamente o exemplo do INSTRUCTIONS (23 anos na Copa)', () => {
    expect(calculateAgeAtDate('2007-04-24', '2030-06-13')).toBe(23);
  });

  it('retorna idade correta quando data de referência é exatamente o aniversário', () => {
    expect(calculateAgeAtDate('1992-02-05', '2030-02-05')).toBe(38);
  });

  it('não conta o aniversário quando a data de referência é um dia antes', () => {
    expect(calculateAgeAtDate('1992-02-05', '2030-02-04')).toBe(37);
  });

  it('calcula corretamente quando o jogador ainda não fez aniversário no ano de referência', () => {
    // Vini Jr: 2000-07-12 → em 2030-06-13 ainda não fez aniversário
    expect(calculateAgeAtDate('2000-07-12', '2030-06-13')).toBe(29);
  });

  it('calcula corretamente quando o jogador já fez aniversário no ano de referência', () => {
    // Raphinha: 1996-12-14 → em 2030-06-13 ainda não fez aniversário naquele ano
    expect(calculateAgeAtDate('1996-12-14', '2030-06-13')).toBe(33);
  });

  it('lida com ano bissexto (nascido em 29/02)', () => {
    expect(calculateAgeAtDate('2000-02-29', '2030-06-13')).toBe(30);
    expect(calculateAgeAtDate('2000-02-29', '2004-02-29')).toBe(4);
  });
});
