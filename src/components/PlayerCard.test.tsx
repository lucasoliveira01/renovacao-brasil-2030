import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PlayerCard } from './PlayerCard';
import type { Player } from '../types/player';

const mockPlayer: Player = {
  id: 'vini-jr-real-madrid',
  name: 'Vini Jr',
  displayName: 'Vini Jr',
  club: 'Real Madrid',
  position: 'Atacante',
  birthDate: '2000-07-12',
  imageUrl: 'https://example.com/vini-jr.png',
  sourceGroup: 'Pre-lista 2026',
  isRemoved: false,
};

describe('PlayerCard', () => {
  let onToggle: ReturnType<typeof vi.fn<(id: string) => void>>;

  beforeEach(() => {
    onToggle = vi.fn<(id: string) => void>();
  });

  it('renderiza o nome do jogador', () => {
    render(<PlayerCard player={mockPlayer} onToggle={onToggle} />);
    expect(screen.getByText('Vini Jr')).toBeInTheDocument();
  });

  it('renderiza o clube do jogador', () => {
    render(<PlayerCard player={mockPlayer} onToggle={onToggle} />);
    expect(screen.getByText('Real Madrid')).toBeInTheDocument();
  });

  it('renderiza a idade na Copa de 2030 (29 anos)', () => {
    render(<PlayerCard player={mockPlayer} onToggle={onToggle} />);
    expect(screen.getByText(/29 anos em 2030/)).toBeInTheDocument();
  });

  it('chama onToggle com o id ao clicar no botão da foto', async () => {
    const user = userEvent.setup();
    render(<PlayerCard player={mockPlayer} onToggle={onToggle} />);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(onToggle).toHaveBeenCalledOnce();
    expect(onToggle).toHaveBeenCalledWith('vini-jr-real-madrid');
  });

  it('botão tem aria-pressed=false quando jogador não está removido', () => {
    render(<PlayerCard player={mockPlayer} onToggle={onToggle} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('botão tem aria-pressed=true quando jogador está removido', () => {
    render(<PlayerCard player={{ ...mockPlayer, isRemoved: true }} onToggle={onToggle} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  it('exibe "FIM DE CICLO" quando jogador está marcado', () => {
    render(<PlayerCard player={{ ...mockPlayer, isRemoved: true }} onToggle={onToggle} />);
    expect(screen.getByText('FIM DE CICLO')).toBeInTheDocument();
  });

  it('não exibe "FIM DE CICLO" quando jogador não está marcado', () => {
    render(<PlayerCard player={mockPlayer} onToggle={onToggle} />);
    expect(screen.queryByText('FIM DE CICLO')).not.toBeInTheDocument();
  });

  it('aplica classe "removed" ao card quando isRemoved=true', () => {
    const { container } = render(
      <PlayerCard player={{ ...mockPlayer, isRemoved: true }} onToggle={onToggle} />,
    );
    const button = container.querySelector('button');
    expect(button?.className).toContain('removed');
  });

  it('não aplica classe "removed" ao card quando isRemoved=false', () => {
    const { container } = render(<PlayerCard player={mockPlayer} onToggle={onToggle} />);
    const button = container.querySelector('button');
    expect(button?.className).not.toContain('removed');
  });
});
