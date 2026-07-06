import { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PlayerGrid } from './components/PlayerGrid';
import { ShareCard } from './components/ShareCard';
import { players as initialPlayers } from './data/players.seed';
import { shareImage } from './utils/shareImage';
import type { Player } from './types/player';
import './styles/global.css';

const TODAY = new Date().toLocaleDateString('pt-BR', {
  day: '2-digit', month: '2-digit', year: 'numeric',
});

export default function App() {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [isSharing, setIsSharing] = useState(false);

  const togglePlayer = useCallback((id: string) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isRemoved: !p.isRemoved } : p)),
    );
  }, []);

  const handleShare = useCallback(async () => {
    setIsSharing(true);
    try {
      await shareImage('share-card');
    } catch (err) {
      console.error('Erro ao compartilhar:', err);
    } finally {
      setIsSharing(false);
    }
  }, []);

  return (
    <div className="app">
      <Header onShare={handleShare} isSharing={isSharing} />
      <div className="share-area">
        <PlayerGrid players={players} onToggle={togglePlayer} />
      </div>

      {/* Componente oculto capturado pelo html-to-image */}
      <div
        aria-hidden="true"
        style={{ position: 'fixed', left: '-9999px', top: 0, pointerEvents: 'none' }}
      >
        <ShareCard players={players} generatedAt={TODAY} />
      </div>
    </div>
  );
}
