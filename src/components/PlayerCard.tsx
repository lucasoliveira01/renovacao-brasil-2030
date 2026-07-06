import { calculateAgeAtDate } from '../utils/calculateAgeAtDate';
import type { Player } from '../types/player';
import styles from './PlayerCard.module.css';

const COPA_DATE = '2030-06-13';

interface PlayerCardProps {
  player: Player;
  onToggle: (id: string) => void;
}

const SOURCE_LABELS: Record<Player['sourceGroup'], string> = {
  'Pre-lista 2026': '',
  'Cortado por lesao': '🩹 Lesão',
  'Promessa': '⭐ Promessa',
};

export function PlayerCard({ player, onToggle }: PlayerCardProps) {
  const age = calculateAgeAtDate(player.birthDate, COPA_DATE);
  const removed = player.isRemoved ?? false;
  const label = SOURCE_LABELS[player.sourceGroup];

  return (
    <button
      type="button"
      className={`${styles.card} ${removed ? styles.removed : ''}`}
      onClick={() => onToggle(player.id)}
      aria-pressed={removed}
      aria-label={`${player.displayName}, ${age} anos em 2030. ${removed ? 'Fim de ciclo marcado.' : 'Clique para marcar fim de ciclo.'}`}
    >
      <div className={`${styles.photoWrapper} ${removed ? styles.photoRemoved : ''}`}>
        <img
          src={player.imageUrl}
          alt={player.displayName}
          className={styles.photo}
          onError={(e) => {
            const img = e.currentTarget;
            img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(player.displayName)}&size=256&background=555&color=fff&bold=true`;
          }}
        />
        {removed && (
          <span className={styles.xOverlay} aria-hidden="true">FIM DE CICLO</span>
        )}
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{player.displayName}</span>
        <span className={styles.club}>{player.club}</span>
        <span className={styles.age}>{age} anos em 2030</span>
        {label && <span className={styles.tag}>{label}</span>}
      </div>
    </button>
  );
}
