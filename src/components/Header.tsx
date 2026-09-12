import React, { useState } from 'react';
import { institutionConfig } from '../config/institutionConfig';
import { QuickExit } from './QuickExit';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'entenda', label: 'Entenda a violência' },
    { id: 'sinais', label: 'Reconheça os sinais' },
    { id: 'direitos', label: 'Direitos e proteção' },
    { id: 'buscar-ajuda', label: 'Como buscar ajuda' },
    { id: 'como-ajudar', label: 'Como ajudar alguém' },
    { id: 'rede', label: 'Rede de atendimento' },
    { id: 'materiais', label: 'Campanhas e Materiais' },
    { id: 'sobre', label: 'Sobre o projeto' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsMenuOpen(false);
    // Depois da troca de página, o foco acompanha a pessoa até o conteúdo novo.
    const mainElement = document.getElementById('main-content');
    if (mainElement) {
      mainElement.tabIndex = -1;
      mainElement.focus();
    }
  };

  return (
    <header className="site-header" style={{ backgroundColor: 'var(--bg-ivory)', borderBottom: '1px solid var(--border-subtle)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="security-strip" style={{ backgroundColor: '#EDE6D8', padding: '0.4rem 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        <div className="container security-bar-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>🔒 Navegação segura. Para sair rapidamente, pressione <strong>ESC</strong>.</span>
          <QuickExit />
        </div>
      </div>

      <div className="container site-header-inner" style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <div>
          <button className="brand-lockup"
            onClick={() => handleNavClick('inicio')} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
          >
            <span className="brand-mark" aria-hidden="true">RA</span>
            <span className="brand-copy">
              <span style={{ fontSize: '1.6rem', fontFamily: 'var(--font-heading)', fontWeight: 'bold', color: 'var(--brand-deep-green)', display: 'block' }}>{institutionConfig.projectName}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--brand-terracotta-dark)' }}>{institutionConfig.slogan}</span>
            </span>
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Alternar menu de navegação"
          style={{ display: 'block', background: 'none', border: '1px solid var(--brand-deep-green)', padding: '0.5rem 0.75rem', borderRadius: '4px', cursor: 'pointer' }}
          className="mobile-menu-btn"
        >
          <span aria-hidden="true">☰</span> Menu
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`} aria-label="Navegação principal">
          <ul style={{ display: 'flex', gap: '0.75rem', listStyle: 'none', flexWrap: 'wrap', alignItems: 'center' }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  aria-current={activeTab === item.id ? 'page' : undefined}
                  style={{
                    background: activeTab === item.id ? 'var(--brand-deep-green)' : 'none',
                    color: activeTab === item.id ? '#FFFFFF' : 'var(--text-primary)',
                    border: 'none',
                    padding: '0.5rem 0.85rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: activeTab === item.id ? 'bold' : 'normal',
                    fontSize: '0.95rem'
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .main-nav { display: ${isMenuOpen ? 'block' : 'none'}; width: 100%; margin-top: 1rem; }
          .main-nav ul { flex-direction: column; align-items: stretch; }
          .main-nav button { width: 100%; text-align: left; padding: 0.75rem; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 993px) {
          .mobile-menu-btn { display: none !important; }
          .main-nav { display: block !important; }
        }
      `}</style>
    </header>
  );
};