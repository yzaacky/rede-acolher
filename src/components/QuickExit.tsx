import React, { useEffect } from 'react';

export const QuickExit: React.FC = () => {
const handleQuickExit = () => {
    // A saída rápida não deve deixar esta página no botão Voltar.
    window.location.replace("https://www.google.com.br");
};

useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
if (event.key === 'Escape' || event.key === 'Esc') {
    event.preventDefault();
        handleQuickExit();
}
    };

  window.addEventListener('keydown', handleKeyDown, true);
  return () => window.removeEventListener('keydown', handleKeyDown, true);
}, []);

return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <button
        onClick={handleQuickExit}
        aria-label="Sair rápido deste site e ir para a pesquisa do Google. Você também pode pressionar a tecla Esc a qualquer momento."
        style={{
        backgroundColor: '#252927',
        color: '#FFFFFF',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem'
        }}
      >
        <span>🚪 Sair rápido</span>
        <span style={{ fontSize: '0.75rem', opacity: 0.8, fontWeight: 'normal' }}>(Atalho: Esc)</span>
      </button>
    </div>
  );
};