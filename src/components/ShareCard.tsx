import type { Player, PlayerPosition } from '../types/player';
import { calculateAgeAtDate } from '../utils/calculateAgeAtDate';

interface ShareCardProps {
  players: Player[];
  generatedAt: string;
}

const COPA_DATE = '2030-06-13';

const POSITION_ORDER: PlayerPosition[] = ['Goleiro', 'Defensor', 'Meio-campo', 'Atacante'];

const POSITION_LABELS: Record<PlayerPosition, string> = {
  Goleiro: '🧤 Goleiros',
  Defensor: '🛡️ Defensores',
  'Meio-campo': '⚙️ Meio-Campo',
  Atacante: '⚡ Atacantes',
};

/** Trunca o nome do clube para caber na célula */
function shortClub(club: string): string {
  const map: Record<string, string> = {
    'Manchester United': 'Man. United',
    'Manchester City': 'Man. City',
    'Nottingham Forest': 'Nott. Forest',
    'Inter de Milão': 'Inter Milan',
  };
  return map[club] ?? club;
}

export function ShareCard({ players, generatedAt }: ShareCardProps) {
  const byPosition = POSITION_ORDER.reduce<Record<PlayerPosition, Player[]>>(
    (acc, pos) => {
      acc[pos] = players.filter((p) => p.position === pos);
      return acc;
    },
    { Goleiro: [], Defensor: [], 'Meio-campo': [], Atacante: [] },
  );

  const totalAtivos = players.filter((p) => !p.isRemoved).length;
  const totalFimDeCiclo = players.filter((p) => p.isRemoved).length;

  return (
    <div
      id="share-card"
      style={{
        width: 800,
        backgroundColor: '#0a1f0e',
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
        color: '#e8f5e9',
        overflow: 'hidden',
      }}
    >
      {/* ── Header ── */}
      <div style={{ background: 'linear-gradient(135deg, #009c3b 0%, #006b28 100%)' }}>
        <div style={{ height: 6, background: '#ffdf00' }} />
        <div style={{ padding: '14px 20px 12px', display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ fontSize: 36, lineHeight: 1 }}>🇧🇷</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: '#ffdf00', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              RENOVAÇÃO BRASIL 2030
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', marginTop: 3 }}>
              {totalAtivos} no ciclo · {totalFimDeCiclo} fim de ciclo · gerado em {generatedAt}
            </div>
          </div>
        </div>
        <div style={{ height: 4, background: '#ffdf00' }} />
      </div>

      {/* ── Sections ── */}
      <div style={{ padding: '10px 14px 12px' }}>
        {POSITION_ORDER.map((position) => {
          const group = byPosition[position];
          if (group.length === 0) return null;

          // decide colunas pela quantidade de jogadores
          const cols = group.length <= 6 ? 3 : 4;

          return (
            <div key={position} style={{ marginBottom: 10 }}>
              {/* section title */}
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#ffdf00',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  borderBottom: '1px solid #1e4427',
                  paddingBottom: 4,
                  marginBottom: 6,
                }}
              >
                {POSITION_LABELS[position]}
              </div>

              {/* player grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${cols}, 1fr)`,
                  gap: '3px 6px',
                }}
              >
                {group.map((player) => {
                  const removed = player.isRemoved ?? false;
                  const age = calculateAgeAtDate(player.birthDate, COPA_DATE);
                  return (
                    <div
                      key={player.id}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 5,
                        padding: '3px 5px',
                        borderRadius: 4,
                        backgroundColor: removed ? '#1a0c0c' : '#0f2213',
                        borderLeft: `3px solid ${removed ? '#cc2222' : '#1fad54'}`,
                      }}
                    >
                      {/* status icon */}
                      <span
                        style={{
                          fontSize: 10,
                          lineHeight: '15px',
                          flexShrink: 0,
                          color: removed ? '#cc2222' : '#1fad54',
                          fontWeight: 900,
                        }}
                      >
                        {removed ? '✕' : '✓'}
                      </span>
                      {/* player info */}
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: 12,
                            fontWeight: 700,
                            color: removed ? '#888' : '#f0f0f0',
                            lineHeight: 1.2,
                            textDecoration: removed ? 'line-through' : 'none',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {player.displayName}
                        </div>
                        <div
                          style={{
                            fontSize: 9.5,
                            color: removed ? '#666' : '#6faa6a',
                            lineHeight: 1.2,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {shortClub(player.club)} · {age}a em 2030
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Footer ── */}
      <div
        style={{
          borderTop: '1px solid #1e4427',
          padding: '6px 14px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 10, color: '#3a6a3e' }}>
          Renovação Brasil 2030 · renovacao-brasil-2030.vercel.app
        </span>
        <span style={{ fontSize: 10, color: '#3a6a3e' }}>
          ✓ no ciclo &nbsp; ✕ fim de ciclo
        </span>
      </div>
    </div>
  );
}
