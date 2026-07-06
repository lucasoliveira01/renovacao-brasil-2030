import styles from './Header.module.css';

interface HeaderProps {
  onShare: () => void;
  isSharing: boolean;
}

export function Header({ onShare, isSharing }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src="/favicon.svg" alt="Logo Renovação Brasil 2030" className={styles.logoImg} />
        </div>
        <div className={styles.titles}>
          <h1 className={styles.title}>Renovação Brasil 2030</h1>
          <p className={styles.subtitle}>
            Clique nos jogadores que você entende que o <strong>ciclo terminou</strong>
          </p>
        </div>
        <button
          type="button"
          className={styles.shareButton}
          onClick={onShare}
          disabled={isSharing}
          aria-label="Compartilhar análise de renovação da seleção"
        >
          {isSharing ? '⏳ Gerando...' : '📤 Compartilhar'}
        </button>
      </div>
    </header>
  );
}
