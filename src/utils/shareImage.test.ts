import { describe, it, expect, vi, afterEach } from 'vitest';

vi.mock('html-to-image', () => ({
  toPng: vi.fn().mockResolvedValue('data:image/png;base64,FAKE'),
}));

globalThis.fetch = vi.fn().mockResolvedValue({
  blob: () => Promise.resolve(new Blob([''], { type: 'image/png' })),
} as unknown as Response);

describe('shareImage', () => {
  afterEach(() => {
    vi.clearAllMocks();
    document.body.innerHTML = '';
  });

  it('faz fallback para download quando Web Share API não suporta arquivos', async () => {
    const div = document.createElement('div');
    div.id = 'share-area';
    document.body.appendChild(div);

    Object.defineProperty(navigator, 'canShare', {
      value: () => false,
      configurable: true,
    });

    const clickSpy = vi.fn();
    const linkProto = HTMLAnchorElement.prototype;
    const originalClick = linkProto.click;
    linkProto.click = clickSpy;

    const { shareImage } = await import('../utils/shareImage');
    await shareImage('share-area');

    expect(clickSpy).toHaveBeenCalledOnce();

    linkProto.click = originalClick;
  });

  it('usa navigator.share quando Web Share API suporta arquivos', async () => {
    const div = document.createElement('div');
    div.id = 'share-area-2';
    document.body.appendChild(div);

    const shareMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'canShare', {
      value: () => true,
      configurable: true,
    });
    Object.defineProperty(navigator, 'share', {
      value: shareMock,
      configurable: true,
    });

    const { shareImage } = await import('../utils/shareImage');
    await shareImage('share-area-2');

    expect(shareMock).toHaveBeenCalledOnce();
    expect(shareMock).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Renovação Brasil 2030',
        files: expect.any(Array),
      }),
    );
  });

  it('não faz nada se o elemento não for encontrado', async () => {
    const { shareImage } = await import('../utils/shareImage');
    await expect(shareImage('elemento-inexistente')).resolves.toBeUndefined();
  });
});
