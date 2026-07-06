import type { Player } from '../types/player';
import { slugify } from '../utils/slugify';

function makePlayer(
  name: string,
  displayName: string,
  club: string,
  position: Player['position'],
  birthDate: string,
  sourceGroup: Player['sourceGroup'],
  imageUrl: string,
): Player {
  const id = slugify(`${name}-${club}`);
  return { id, name, displayName, club, position, birthDate, imageUrl, sourceGroup };
}

export const players: Player[] = [
  // ─── Goleiros ───────────────────────────────────────────────────────────────
  makePlayer('Alisson',    'Alisson',    'Liverpool',         'Goleiro', '1992-10-02', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/105470-1780389358.jpg?lm=1'),
  makePlayer('Bento',      'Bento',      'Al-Nassr',          'Goleiro', '1999-06-10', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/691906-1719653599.jpg?lm=1'),
  makePlayer('Ederson',    'Ederson',    'Fenerbahçe',        'Goleiro', '1993-08-17', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/238223-1765380595.jpg?lm=1'),
  makePlayer('Hugo Souza', 'Hugo Souza', 'Corinthians',       'Goleiro', '1999-01-31', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/574901-1758160198.jpg?lm=1'),
  makePlayer('John',       'John',       'Nottingham Forest', 'Goleiro', '1996-02-13', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/432914-1734107350.jpg?lm=1'),
  makePlayer('Weverton',   'Weverton',   'Grêmio',            'Goleiro', '1987-12-13', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/69400-1751657170.jpg?lm=1'),

  // ─── Defensores ─────────────────────────────────────────────────────────────
  makePlayer('Alex Sandro',       'Alex Sandro',       'Flamengo',         'Defensor', '1991-01-26', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/79960-1751370710.jpg?lm=1'),
  makePlayer('Alexsandro',        'Alexsandro',        'Lille',            'Defensor', '1999-08-09', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/648020-1666689768.jpg?lm=1'),
  makePlayer('Bremer',            'Bremer',            'Juventus',         'Defensor', '1997-03-18', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/516716-1725531520.jpg?lm=1'),
  makePlayer('Carlos Augusto',    'Carlos Augusto',    'Inter de Milão',   'Defensor', '1999-03-23', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/585982-1735891597.jpg?lm=1'),
  makePlayer('Danilo',            'Danilo',            'Flamengo',         'Defensor', '1991-07-15', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/145707-1663577215.jpg?lm=1'),
  makePlayer('Douglas Santos',    'Douglas Santos',    'Zenit',            'Defensor', '1994-03-22', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/220793-1756746479.png?lm=1'),
  makePlayer('Fabrício Bruno',    'Fabrício Bruno',    'Cruzeiro',         'Defensor', '1996-02-12', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/432773-1744743199.jpg?lm=1'),
  makePlayer('Gabriel Magalhães', 'Gabriel Magalhães', 'Arsenal',          'Defensor', '1997-12-19', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/435338-1684162833.jpg?lm=1'),
  makePlayer('Ibañez',            'Ibañez',            'Al-Ahli',          'Defensor', '1998-11-23', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/524481-1663581987.jpg?lm=1'),
  makePlayer('Kaiki Bruno',       'Kaiki Bruno',       'Cruzeiro',         'Defensor', '2003-03-08', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/879217-1678847563.jpg?lm=1'),
  makePlayer('Léo Ortiz',         'Léo Ortiz',         'Flamengo',         'Defensor', '1996-01-03', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/374136-1751370337.jpg?lm=1'),
  makePlayer('Léo Pereira',       'Léo Pereira',       'Flamengo',         'Defensor', '1996-01-31', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/288431-1751370674.jpg?lm=1'),
  makePlayer('Luciano Juba',      'Luciano Juba',      'Bahia',            'Defensor', '1999-08-29', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/676035-1694193133.jpg?lm=1'),
  makePlayer('Marquinhos',        'Marquinhos',        'PSG',              'Defensor', '1994-05-14', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/181767-1672303747.jpg?lm=1'),
  makePlayer('Natan',             'Natan',             'Betis',            'Defensor', '2001-02-06', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/735568-1708553167.jpg?lm=1'),
  makePlayer('Paulo Henrique',    'Paulo Henrique',    'Vasco',            'Defensor', '1996-07-25', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/412594-1759761629.jpg?lm=1'),
  makePlayer('Thiago Silva',      'Thiago Silva',      'Porto',            'Defensor', '1984-09-22', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/29241-1661856081.jpg?lm=1'),
  makePlayer('Vitinho',           'Vitinho',           'Botafogo',         'Defensor', '1999-04-01', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/468249-1626767682.jpg?lm=1'),
  makePlayer('Vitor Reis',        'Vitor Reis',        'Girona',           'Defensor', '2006-02-05', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/1005575-1680449774.jpg?lm=1'),
  makePlayer('Wesley',            'Wesley',            'Roma',             'Defensor', '2003-03-13', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/964580-1743167536.jpg?lm=1'),

  // ─── Meio-campo ─────────────────────────────────────────────────────────────
  makePlayer('Andreas Pereira', 'Andreas Pereira', 'Palmeiras',        'Meio-campo', '1996-01-01', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/203394-1659355525.jpg?lm=1'),
  makePlayer('Andrey Santos',   'Andrey Santos',   'Chelsea',          'Meio-campo', '2004-08-05', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/743600-1732576153.png?lm=1'),
  makePlayer('Bruno Guimarães', 'Bruno Guimarães', 'Newcastle',        'Meio-campo', '1997-11-16', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/520624-1780929894.jpg?lm=1'),
  makePlayer('Casemiro',        'Casemiro',        'Manchester United', 'Meio-campo', '1992-02-23', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/16306-1699018876.jpg?lm=1'),
  makePlayer('Danilo',          'Danilo',          'Botafogo',         'Meio-campo', '2001-04-29', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/808509-1780390517.jpg?lm=1'),
  makePlayer('Éderson',         'Éderson',         'Atalanta',         'Meio-campo', '1999-07-07', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/607854-1646648856.jpg?lm=1'),
  makePlayer('Fabinho',         'Fabinho',         'Al-Ittihad',       'Meio-campo', '1993-10-23', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/225693-1703282636.png?lm=1'),
  makePlayer('Gabriel Sara',    'Gabriel Sara',    'Galatasaray',      'Meio-campo', '1999-06-26', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/553469-1731009174.jpg?lm=1'),
  makePlayer('Gerson',          'Gerson',          'Cruzeiro',         'Meio-campo', '1997-05-20', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/341705-1752473227.png?lm=1'),
  makePlayer('João Gomes',      'João Gomes',      'Wolverhampton',    'Meio-campo', '2001-02-05', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/735570-1675092223.jpg?lm=1'),
  makePlayer('Lucas Paquetá',   'Lucas Paquetá',   'Flamengo',         'Meio-campo', '1997-08-27', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/444523-1780929763.jpg?lm=1'),
  makePlayer('Matheus Pereira', 'Matheus Pereira', 'Cruzeiro',         'Meio-campo', '1996-05-05', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/225984-1697289790.jpg?lm=1'),

  // ─── Atacantes ──────────────────────────────────────────────────────────────
  makePlayer('Antony',            'Antony',            'Betis',             'Atacante', '2000-02-24', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/602105-1758783018.jpg?lm=1'),
  makePlayer('Endrick',           'Endrick',           'Lyon',              'Atacante', '2006-07-21', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/971570-1782847902.jpg?lm=1'),
  makePlayer('Gabriel Martinelli','Gabriel Martinelli', 'Arsenal',           'Atacante', '2001-06-18', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/655488-1682689091.jpg?lm=1'),
  makePlayer('Gabriel Jesus',     'Gabriel Jesus',     'Arsenal',           'Atacante', '1997-04-03', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/363205-1669711141.jpg?lm=1'),
  makePlayer('Igor Jesus',        'Igor Jesus',        'Nottingham Forest', 'Atacante', '2001-03-07', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/432164-1725325779.jpg?lm=1'),
  makePlayer('Igor Thiago',       'Igor Thiago',       'Brentford',         'Atacante', '2001-06-26', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/739443-1770372295.jpg?lm=1'),
  makePlayer('João Pedro',        'João Pedro',        'Chelsea',           'Atacante', '2001-09-09', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/626724-1724792744.jpg?lm=1'),
  makePlayer('Kaio Jorge',        'Kaio Jorge',        'Cruzeiro',          'Atacante', '2002-01-24', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/620477-1693289628.jpg?lm=1'),
  makePlayer('Luiz Henrique',     'Luiz Henrique',     'Zenit',             'Atacante', '2001-01-14', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/800175-1756746940.png?lm=1'),
  makePlayer('Matheus Cunha',     'Matheus Cunha',     'Manchester United', 'Atacante', '1999-06-27', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/517894-1780390711.jpg?lm=1'),
  makePlayer('Neymar',            'Neymar',            'Santos',            'Atacante', '1992-02-05', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/68290-1692601435.jpg?lm=1'),
  makePlayer('Pedro',             'Pedro',             'Flamengo',          'Atacante', '1997-10-09', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/432895-1668696996.jpg?lm=1'),
  makePlayer('Raphinha',          'Raphinha',          'Barcelona',         'Atacante', '1996-12-14', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/411295-1729754479.png?lm=1'),
  makePlayer('Rayan',             'Rayan',             'Bournemouth',       'Atacante', '2007-04-24', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/1012564-1780390891.jpg?lm=1'),
  makePlayer('Richarlison',       'Richarlison',       'Tottenham',         'Atacante', '1997-05-10', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/378710-1665608231.jpg?lm=1'),
  makePlayer('Samuel Lino',       'Samuel Lino',       'Flamengo',          'Atacante', '1999-12-23', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/694928-1695982815.jpg?lm=1'),
  makePlayer('Vini Jr',           'Vini Jr',           'Real Madrid',       'Atacante', '2000-07-12', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/371998-1761575144.jpg?lm=1'),
  makePlayer('Estêvão',     'Estêvão',     'Chelsea',     'Atacante',   '2007-03-24', 'Promessa', 'https://img.a.transfermarkt.technology/portrait/big/1056993-1766148652.jpg?lm=1'),
  makePlayer('Rodrygo',     'Rodrygo',     'Real Madrid', 'Atacante',   '2001-01-09', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/412363-1763041611.jpg?lm=1'),
  makePlayer('Éder Militão','Éder Militão','Real Madrid', 'Defensor',   '1998-01-18', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/401530-1719653438.jpg?lm=1'),

  // ─── Promessas ──────────────────────────────────────────────────────────────
  // Goleiros
  makePlayer('Mycael',        'Mycael',        'Athletico-PR',       'Goleiro',     '2004-03-12', 'Promessa', 'https://img.a.transfermarkt.technology/portrait/big/743586-1661710509.jpg?lm=1'),
  makePlayer('Gabriel Brazão','Gabriel Brazão','Santos',             'Goleiro',     '2000-10-05', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/371247-1780359299.jpg?lm=1'),
  makePlayer('Robert',        'Robert',        'Atletico-MG',       'Goleiro',     '2005-02-03', 'Promessa', 'https://img.a.transfermarkt.technology/portrait/big/1124553-1745582504.jpg?lm=1'),
  makePlayer('Felipe Longo',  'Felipe Longo',  'Corinthians',        'Goleiro',     '2005-05-10', 'Promessa', 'https://img.a.transfermarkt.technology/portrait/big/1005656-1758248276.png?lm=1'),

  // Jogadores de linha
  makePlayer('Vitor Roque',   'Vitor Roque',   'Betis',              'Atacante',    '2005-02-28', 'Promessa', 'https://img.a.transfermarkt.technology/portrait/big/943837-1744743482.jpg?lm=1'),
  makePlayer('Breno Bidon',   'Breno Bidon',   'Chelsea',            'Meio-campo',  '2005-02-20', 'Promessa', 'https://img.a.transfermarkt.technology/portrait/big/1029227-1725327135.jpg?lm=1'),
  makePlayer('Savinho',       'Savinho',       'Manchester City',    'Atacante',    '2004-04-10', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/743591-1751367497.jpg?lm=1'),
  makePlayer('Lucas Beraldo', 'Lucas Beraldo', 'PSG',                'Defensor',    '2003-11-24', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/872171-1715107660.jpg?lm=1'),
  makePlayer('Murillo',       'Murillo',       'Nottingham Forest',  'Defensor',    '2002-07-04', 'Pre-lista 2026', 'https://img.a.transfermarkt.technology/portrait/big/1005649-1709159139.jpg?lm=1'),
  makePlayer('Gabriel Mec',   'Gabriel Mec',   'Grêmio',             'Atacante',    '2008-04-11', 'Promessa', 'https://img.a.transfermarkt.technology/portrait/big/1228661-1757072570.png?lm=1'),
];
