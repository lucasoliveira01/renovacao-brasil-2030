import { toPng } from 'html-to-image';

export async function shareImage(cardId = 'share-card'): Promise<void> {
  const node = document.getElementById(cardId);
  if (!node) return;

  const dataUrl = await toPng(node, {
    cacheBust: true,
    pixelRatio: 2,
    backgroundColor: '#0a1f0e',
  });
  const blob = await (await fetch(dataUrl)).blob();
  const file = new File([blob], 'renovacao-selecao-brasileira.png', { type: 'image/png' });

  if (navigator.canShare?.({ files: [file] })) {
    await navigator.share({
      title: 'Renovação Brasil 2030',
      text: 'Minha análise do próximo ciclo da Seleção',
      files: [file],
    });
    return;
  }

  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = 'renovacao-selecao-brasileira.png';
  link.click();
}
