import React from 'react';
import { EmergencyBanner } from '../components/EmergencyBanner';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  return (
    <div className="home-page">
      <section className="hero-section" style={{ padding: '2.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="hero-copy" style={{ maxWidth: '800px' }}>
          <h1>Reconhecer a violência pode ser o começo de um caminho mais seguro.</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Informações claras para compreender os sinais, conhecer seus direitos e encontrar serviços de apoio público na sua região. Se você estiver acompanhando alguém, também encontrará orientações sobre como ajudar com respeito.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => setActiveTab('buscar-ajuda')} className="btn btn-primary">
              Preciso de orientação
            </button>
            <button onClick={() => setActiveTab('como-ajudar')} className="btn btn-secondary">
              Quero ajudar alguém
            </button>
          </div>
        </div>
      </section>

      <EmergencyBanner />

      <section className="intro-section" style={{ padding: '2rem 0' }}>
        <div className="section-panel" style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-subtle)', border: '1px solid var(--border-subtle)' }}>
          <h2>Talvez você ainda não saiba como chamar o que está acontecendo.</h2>
          <p>
            A violência doméstica nem sempre começa com uma agressão física. Ela também pode aparecer de formas mais silenciosas, como controle excessivo, humilhação, ameaça, isolamento de amigos e familiares, pressão sexual ou retenção de dinheiro e documentos.
          </p>
          <p style={{ marginTop: '1rem', fontWeight: '500', color: 'var(--brand-terracotta-dark)' }}>
            💡 Conhecer esses sinais ajuda a identificar o problema no início e procurar apoio especializado com segurança.
          </p>
        </div>
      </section>

      <section className="violence-section" style={{ padding: '2rem 0' }}>
        <h2>Formas de violência doméstica</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          De acordo com a Lei Maria da Penha (Lei nº 11.340/2006), a violência doméstica e familiar manifesta-se de cinco formas principais. Diferentes tipos podem ocorrer ao mesmo tempo:
        </p>

        <div className="violence-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            {
              title: "1. Violência Física",
              desc: "Qualquer conduta que ofenda a integridade ou saúde corporal.",
              ex: ["Empurrões, chutes, tapas ou sacodes", "Apertos no braço que deixam marcas", "Uso de objetos para ferir ou intimar"]
            },
            {
              title: "2. Violência Psicológica",
              desc: "Qualquer conduta que cause dano emocional, diminuição da autoestima ou controle de comportamentos.",
              ex: ["Humilhações em público ou no privado", "Ameaças a você, filhos ou animais", "Isolamento de amigos e parentes"]
            },
            {
              title: "3. Violência Sexual",
              desc: "Conduta que constranja a presenciar, manter ou participar de relação sexual não desejada.",
              ex: ["Forçar relações sexuais por chantagem", "Impedir o uso de métodos contraceptivos", "Exigir atos sexuais que causam desconforto"]
            },
            {
              title: "4. Violência Patrimonial",
              desc: "Retenção, subtração, destruição parcial ou total de objetos, documentos ou recursos econômicos.",
              ex: ["Controlar ou reter todo o seu salário", "Destruir seus objetos de trabalho ou roupas", "Esconder ou rasgar seus documentos"]
            },
            {
              title: "5. Violência Moral",
              desc: "Qualquer conduta que configure calúnia, difamação ou injúria.",
              ex: ["Fazer acusações falsas sobre sua conduta", "Xingar ou desqualificar seu caráter", "Expor sua vida íntima para terceiros ou na internet"]
            }
          ].map((item, idx) => (
            <div className="violence-card" key={idx} style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: 'var(--radius-subtle)', border: '1px solid var(--border-subtle)', borderTop: '4px solid var(--brand-medium-green)' }}>
              <h3 style={{ fontSize: '1.2rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>{item.desc}</p>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {item.ex.map((e, i) => <li key={i}>{e}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
          <button onClick={() => setActiveTab('entenda')} className="btn btn-secondary">
            Entenda detalhadamente cada tipo de violência →
          </button>
        </div>
      </section>

      <section className="pathways-section" style={{ padding: '2rem', backgroundColor: '#EFEAE1', borderRadius: 'var(--radius-subtle)' }}>
        <h2>Por onde você gostaria de começar?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <button onClick={() => setActiveTab('entenda')} className="btn btn-secondary" style={{ backgroundColor: '#FFF', justifyContent: 'flex-start', padding: '1.2rem' }}>
            💬 Quero entender o que estou vivendo
          </button>
          <button onClick={() => setActiveTab('direitos')} className="btn btn-secondary" style={{ backgroundColor: '#FFF', justifyContent: 'flex-start', padding: '1.2rem' }}>
            ⚖️ Preciso conhecer meus direitos
          </button>
          <button onClick={() => setActiveTab('como-ajudar')} className="btn btn-secondary" style={{ backgroundColor: '#FFF', justifyContent: 'flex-start', padding: '1.2rem' }}>
            🤝 Quero ajudar uma pessoa próxima
          </button>
          <button onClick={() => setActiveTab('rede')} className="btn btn-secondary" style={{ backgroundColor: '#FFF', justifyContent: 'flex-start', padding: '1.2rem' }}>
            📍 Preciso encontrar um serviço local
          </button>
        </div>
      </section>

      <section className="closing-note" style={{ padding: '3rem 0', textAlign: 'center' }}>
        <p style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--brand-deep-green)', maxWidth: '600px', margin: '0 auto' }}>
          “A informação não resolve tudo sozinha, mas é o primeiro passo para reconhecer direitos e encontrar apoio seguro.”
        </p>
      </section>
    </div>
  );
};