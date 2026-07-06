import type { Player, PlayerPosition } from '../types/player';
import { PlayerCard } from './PlayerCard';
import styles from './PlayerGrid.module.css';

interface PlayerGridProps {
  players: Player[];
  onToggle: (id: string) => void;
}

const POSITION_ORDER: PlayerPosition[] = ['Goleiro', 'Defensor', 'Meio-campo', 'Atacante'];

const POSITION_LABELS: Record<PlayerPosition, string> = {
  Goleiro: '🧤 Goleiros',
  Defensor: '🛡️ Defensores',
  'Meio-campo': '⚙️ Meio-Campo',
  Atacante: '⚡ Atacantes',
};

export function PlayerGrid({ players, onToggle }: PlayerGridProps) {
  const byPosition = POSITION_ORDER.reduce<Record<PlayerPosition, Player[]>>(
    (acc, pos) => {
      acc[pos] = players.filter((p) => p.position === pos);
      return acc;
    },
    { Goleiro: [], Defensor: [], 'Meio-campo': [], Atacante: [] },
  );

  return (
    <div className={styles.container}>
      {POSITION_ORDER.map((position) => {
        const group = byPosition[position];
        if (group.length === 0) return null;
        return (
          <section key={position} className={styles.section}>
            <h2 className={styles.sectionTitle}>{POSITION_LABELS[position]}</h2>
            <div className={styles.grid}>
              {group.map((player) => (
                <PlayerCard key={player.id} player={player} onToggle={onToggle} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
