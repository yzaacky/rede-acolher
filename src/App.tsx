import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { EntendaAViolencia } from './pages/EntendaAViolencia';
import { ReconhecaOSinais } from './pages/ReconhecaOSinais';
import { DireitosEProtecao } from './pages/DireitosEProtecao';
import { ComoBuscarAjuda } from './pages/ComoBuscarAjuda';
import { ComoAjudarAlguem } from './pages/ComoAjudarAlguem';
import { RedeDeAtendimento } from './pages/RedeDeAtendimento';
import { MateriaisEducativos } from './pages/MateriaisEducativos';
import { SobreOProjeto } from './pages/SobreOProjeto';
import './styles/variables.css';
import './styles/global.css';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('inicio');

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio':
        return <Home setActiveTab={setActiveTab} />;
      case 'entenda':
        return <EntendaAViolencia />;
      case 'sinais':
        return <ReconhecaOSinais />;
      case 'direitos':
        return <DireitosEProtecao />;
      case 'buscar-ajuda':
        return <ComoBuscarAjuda />;
      case 'como-ajudar':
        return <ComoAjudarAlguem />;
      case 'rede':
        return <RedeDeAtendimento />;
      case 'materiais':
        return <MateriaisEducativos />;
      case 'sobre':
        return <SobreOProjeto />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main id="main-content" tabIndex={-1} className="container" style={{ flex: 1, paddingTop: '2rem' }}>
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;