import type { Player } from '../types/player';
import { slugify } from '../utils/slugify';

function makePlayer(
  name: string,
  displayName: string,
  club: string,
  position: Player['position'],
  birthDate: string,
  sourceGroup: Player['sourceGroup'],
): Player {
  const id = slugify(`${name}-${club}`);
  const encodedName = encodeURIComponent(displayName);
  const imageUrl = `https://ui-avatars.com/api/?name=${encodedName}&size=256&background=009c3b&color=ffdf00&bold=true&font-size=0.4`;
  return { id, name, displayName, club, position, birthDate, imageUrl, sourceGroup };
}

export const players: Player[] = [
  // ─── Goleiros ───────────────────────────────────────────────────────────────
  makePlayer('Alisson',    'Alisson',    'Liverpool',         'Goleiro', '1992-10-02', 'Pre-lista 2026'),
  makePlayer('Bento',      'Bento',      'Al-Nassr',          'Goleiro', '2000-03-01', 'Pre-lista 2026'),
  makePlayer('Ederson',    'Ederson',    'Fenerbahçe',        'Goleiro', '1993-08-17', 'Pre-lista 2026'),
  makePlayer('Hugo Souza', 'Hugo Souza', 'Corinthians',       'Goleiro', '1999-01-31', 'Pre-lista 2026'),
  makePlayer('John',       'John',       'Nottingham Forest', 'Goleiro', '1996-02-13', 'Pre-lista 2026'),
  makePlayer('Weverton',   'Weverton',   'Grêmio',            'Goleiro', '1987-12-13', 'Pre-lista 2026'),

  // ─── Defensores ─────────────────────────────────────────────────────────────
  makePlayer('Alex Sandro',       'Alex Sandro',       'Flamengo',         'Defensor', '1991-01-26', 'Pre-lista 2026'),
  makePlayer('Alexsandro',        'Alexsandro',        'Lille',            'Defensor', '1999-08-09', 'Pre-lista 2026'),
  makePlayer('Bremer',            'Bremer',            'Juventus',         'Defensor', '1997-03-18', 'Pre-lista 2026'),
  makePlayer('Carlos Augusto',    'Carlos Augusto',    'Inter de Milão',   'Defensor', '1999-03-23', 'Pre-lista 2026'),
  makePlayer('Danilo',            'Danilo',            'Flamengo',         'Defensor', '1991-07-15', 'Pre-lista 2026'),
  makePlayer('Douglas Santos',    'Douglas Santos',    'Zenit',            'Defensor', '1994-03-22', 'Pre-lista 2026'),
  makePlayer('Fabrício Bruno',    'Fabrício Bruno',    'Cruzeiro',         'Defensor', '1996-02-12', 'Pre-lista 2026'),
  makePlayer('Gabriel Magalhães', 'Gabriel Magalhães', 'Arsenal',          'Defensor', '1997-12-19', 'Pre-lista 2026'),
  makePlayer('Ibañez',            'Ibañez',            'Al-Ahli',          'Defensor', '1998-11-23', 'Pre-lista 2026'),
  makePlayer('Kaiki Bruno',       'Kaiki Bruno',       'Cruzeiro',         'Defensor', '2003-03-08', 'Pre-lista 2026'),
  makePlayer('Léo Ortiz',         'Léo Ortiz',         'Flamengo',         'Defensor', '1996-01-03', 'Pre-lista 2026'),
  makePlayer('Léo Pereira',       'Léo Pereira',       'Flamengo',         'Defensor', '1996-01-31', 'Pre-lista 2026'),
  makePlayer('Luciano Juba',      'Luciano Juba',      'Bahia',            'Defensor', '1999-08-29', 'Pre-lista 2026'),
  makePlayer('Marquinhos',        'Marquinhos',        'PSG',              'Defensor', '1994-05-14', 'Pre-lista 2026'),
  makePlayer('Natan',             'Natan',             'Betis',            'Defensor', '2001-02-06', 'Pre-lista 2026'),
  makePlayer('Paulo Henrique',    'Paulo Henrique',    'Vasco',            'Defensor', '1996-07-25', 'Pre-lista 2026'),
  makePlayer('Thiago Silva',      'Thiago Silva',      'Porto',            'Defensor', '1984-09-22', 'Pre-lista 2026'),
  makePlayer('Vitinho',           'Vitinho',           'Botafogo',         'Defensor', '1999-04-01', 'Pre-lista 2026'),
  makePlayer('Vitor Reis',        'Vitor Reis',        'Girona',           'Defensor', '2006-02-05', 'Pre-lista 2026'),
  makePlayer('Wesley',            'Wesley',            'Roma',             'Defensor', '2003-03-13', 'Pre-lista 2026'),

  // ─── Meio-campo ─────────────────────────────────────────────────────────────
  makePlayer('Andreas Pereira', 'Andreas Pereira', 'Palmeiras',        'Meio-campo', '1996-01-01', 'Pre-lista 2026'),
  makePlayer('Andrey Santos',   'Andrey Santos',   'Chelsea',          'Meio-campo', '2004-08-05', 'Pre-lista 2026'),
  makePlayer('Bruno Guimarães', 'Bruno Guimarães', 'Newcastle',        'Meio-campo', '1997-11-16', 'Pre-lista 2026'),
  makePlayer('Casemiro',        'Casemiro',        'Manchester United', 'Meio-campo', '1992-02-23', 'Pre-lista 2026'),
  makePlayer('Danilo',          'Danilo',          'Botafogo',         'Meio-campo', '2001-04-29', 'Pre-lista 2026'),
  makePlayer('Éderson',         'Éderson',         'Atalanta',         'Meio-campo', '1999-07-07', 'Pre-lista 2026'),
  makePlayer('Fabinho',         'Fabinho',         'Al-Ittihad',       'Meio-campo', '1993-10-23', 'Pre-lista 2026'),
  makePlayer('Gabriel Sara',    'Gabriel Sara',    'Galatasaray',      'Meio-campo', '1999-06-26', 'Pre-lista 2026'),
  makePlayer('Gerson',          'Gerson',          'Cruzeiro',         'Meio-campo', '1997-05-20', 'Pre-lista 2026'),
  makePlayer('João Gomes',      'João Gomes',      'Wolverhampton',    'Meio-campo', '2001-02-05', 'Pre-lista 2026'),
  makePlayer('Lucas Paquetá',   'Lucas Paquetá',   'Flamengo',         'Meio-campo', '1997-08-27', 'Pre-lista 2026'),
  makePlayer('Matheus Pereira', 'Matheus Pereira', 'Cruzeiro',         'Meio-campo', '1996-05-05', 'Pre-lista 2026'),

  // ─── Atacantes ──────────────────────────────────────────────────────────────
  makePlayer('Antony',            'Antony',            'Betis',             'Atacante', '2000-02-24', 'Pre-lista 2026'),
  makePlayer('Endrick',           'Endrick',           'Lyon',              'Atacante', '2006-07-21', 'Pre-lista 2026'),
  makePlayer('Gabriel Martinelli','Gabriel Martinelli', 'Arsenal',           'Atacante', '2001-06-18', 'Pre-lista 2026'),
  makePlayer('Gabriel Jesus',     'Gabriel Jesus',     'Arsenal',           'Atacante', '1997-04-03', 'Pre-lista 2026'),
  makePlayer('Igor Jesus',        'Igor Jesus',        'Nottingham Forest', 'Atacante', '2001-03-07', 'Pre-lista 2026'),
  makePlayer('Igor Thiago',       'Igor Thiago',       'Brentford',         'Atacante', '2001-06-26', 'Pre-lista 2026'),
  makePlayer('João Pedro',        'João Pedro',        'Chelsea',           'Atacante', '2001-09-09', 'Pre-lista 2026'),
  makePlayer('Kaio Jorge',        'Kaio Jorge',        'Cruzeiro',          'Atacante', '2002-01-24', 'Pre-lista 2026'),
  makePlayer('Luiz Henrique',     'Luiz Henrique',     'Zenit',             'Atacante', '2001-01-14', 'Pre-lista 2026'),
  makePlayer('Matheus Cunha',     'Matheus Cunha',     'Manchester United', 'Atacante', '1999-06-27', 'Pre-lista 2026'),
  makePlayer('Neymar',            'Neymar',            'Santos',            'Atacante', '1992-02-05', 'Pre-lista 2026'),
  makePlayer('Pedro',             'Pedro',             'Flamengo',          'Atacante', '1997-10-09', 'Pre-lista 2026'),
  makePlayer('Raphinha',          'Raphinha',          'Barcelona',         'Atacante', '1996-12-14', 'Pre-lista 2026'),
  makePlayer('Rayan',             'Rayan',             'Bournemouth',       'Atacante', '2007-04-24', 'Pre-lista 2026'),
  makePlayer('Richarlison',       'Richarlison',       'Tottenham',         'Atacante', '1997-05-10', 'Pre-lista 2026'),
  makePlayer('Samuel Lino',       'Samuel Lino',       'Flamengo',          'Atacante', '1999-12-23', 'Pre-lista 2026'),
  makePlayer('Vini Jr',           'Vini Jr',           'Real Madrid',       'Atacante', '2000-07-12', 'Pre-lista 2026'),
  makePlayer('Estêvão',     'Estêvão',     'Chelsea',     'Atacante',   '2007-03-24', 'Pre-lista 2026'),
  makePlayer('Rodrygo',     'Rodrygo',     'Real Madrid', 'Atacante',   '2001-01-09', 'Pre-lista 2026'),
  makePlayer('Éder Militão','Éder Militão','Real Madrid', 'Defensor',   '1998-01-18', 'Pre-lista 2026'),

  // ─── Promessas ──────────────────────────────────────────────────────────────
  // Goleiros
  makePlayer('Mycael',        'Mycael',        'Athletico-PR',       'Goleiro',     '2004-03-12', 'Promessa'),
  makePlayer('Gabriel Brazão','Gabriel Brazão','Santos',             'Goleiro',     '2000-10-05', 'Promessa'),
  makePlayer('Robert',        'Robert',        'Athletico-PR',       'Goleiro',     '2005-01-08', 'Promessa'),
  makePlayer('Felipe Longo',  'Felipe Longo',  'Corinthians',        'Goleiro',     '2005-05-10', 'Promessa'),

  // Jogadores de linha
  makePlayer('Vitor Roque',   'Vitor Roque',   'Betis',              'Atacante',    '2005-02-28', 'Promessa'),
  makePlayer('Breno Bidon',   'Breno Bidon',   'Chelsea',            'Meio-campo',  '2005-02-20', 'Promessa'),
  makePlayer('Savinho',       'Savinho',       'Manchester City',    'Atacante',    '2004-04-10', 'Promessa'),
  makePlayer('Lucas Beraldo', 'Lucas Beraldo', 'PSG',                'Defensor',    '2003-11-24', 'Promessa'),
  makePlayer('Murillo',       'Murillo',       'Nottingham Forest',  'Defensor',    '2002-07-04', 'Promessa'),
  makePlayer('Gabriel Mec',   'Gabriel Mec',   'Grêmio',             'Atacante',    '2008-04-11', 'Promessa'),
];
