import React, { useState } from 'react';

export const ReconhecaOSinais: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const questions = [
    { id: 'q1', text: 'Alguém monitora suas ligações, mensagens de celular ou redes sociais?' },
    { id: 'q2', text: 'Você se sente constantemente pisando em ovos com medo da reação da outra pessoa?' },
    { id: 'q3', text: 'Seus documentos, cartão bancário ou dinheiro são retidos sem seu consentimento?' },
    { id: 'q4', text: 'Você é pressionada ou pressionado a ter relações sexuais para evitar brigas?' },
    { id: 'q5', text: 'A pessoa ameaça machucar você, seus filhos, parentes ou animais de estimação?' },
    { id: 'q6', text: 'A pessoa impede ou dificulta que você estude, trabalhe ou veja seus amigos?' }
  ];

  const countChecked = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1>Reconheça os Sinais de Abuso</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        A violência nem sempre é visível ou repentina. Muitas vezes ela se instala aos poucos, fantasiada de ciúme, preocupação ou proteção.
      </p>

      <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-subtle)', border: '1px solid var(--border-subtle)', marginBottom: '2rem' }}>
        <h2>Ferramenta de Reflexão: "Isso merece atenção?"</h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Assinale as situações abaixo que você já vivenciou ou presencia na sua rotina. Esta ferramenta serve exclusivamente para reflexão pessoal e não gera nenhum tipo de pontuação ou diagnóstico.
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset style={{ border: 'none' }}>
            <legend className="sr-only">Perguntas de reflexão sobre relacionamento</legend>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {questions.map((q) => (
                <label key={q.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer', padding: '0.75rem', borderRadius: '4px', backgroundColor: checkedItems[q.id] ? '#F0F5F4' : 'transparent' }}>
                  <input
                    type="checkbox"
                    checked={!!checkedItems[q.id]}
                    onChange={() => toggleCheck(q.id)}
                    style={{ marginTop: '0.25rem', width: '18px', height: '18px' }}
                  />
                  <span>{q.text}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </form>

        {countChecked > 0 && (
          <div style={{ marginTop: '1.5rem', padding: '1.25rem', backgroundColor: '#FDF7EB', borderRadius: 'var(--radius-subtle)', borderLeft: '4px solid var(--brand-warm-yellow)' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-deep-green)', margin: '0 0 0.5rem 0' }}>
              Orientação de Apoio
            </h3>
            <p style={{ fontSize: '0.95rem' }}>
              Se alguma dessas situações parece familiar, considere conversar com um serviço especializado da rede pública. Você não precisa ter certeza absoluta nem reunir provas para buscar uma orientação inicial.
            </p>
          </div>
        )}
      </div>

      <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-subtle)', border: '1px solid var(--border-subtle)' }}>
        <h2>O Ciclo da Violência</h2>
        <p style={{ marginBottom: '1rem' }}>
          Em muitos casos de relacionamentos afetivos, a violência ocorre em um ciclo repetitivo composto por três fases principais:
        </p>
        <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li>
            <strong>1. Aumento da Tensão:</strong> Irritabilidade, ofensas verbais, crises de ciúme infundadas e ameaças Veladas.
          </li>
          <li>
            <strong>2. Explosão ou Agressão:</strong> Ocorre o ato violento propriamente dito (físico, verbal, psicológico ou patrimonial).
          </li>
          <li>
            <strong>3. "Lua de Mel" ou Arrependimento:</strong> O agressor pede perdão, promete mudar, traz presentes e demonstra carinho até que a tensão recomece.
          </li>
        </ol>
        <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
          * Importante: Nem toda situação de violência segue exatamente esse ciclo, mas reconhecer a repetição de padrões ajuda a quebrar a sensação de isolamento.
        </p>
      </div>
    </div>
  );
};