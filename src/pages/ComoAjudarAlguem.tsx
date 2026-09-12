import React from 'react';

export const ComoAjudarAlguem: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1>Como Ajudar uma Pessoa Próxima</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        Saber que uma amiga, familiar, vizinha ou colega de trabalho está sofrendo violência é angustiante. Sua postura pode fazer a diferença na segurança e no acolhimento dela.
      </p>

      <section style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-subtle)', border: '1px solid var(--border-subtle)', marginBottom: '2rem' }}>
        <h2>O que fazer para apoiar</h2>
        <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <li><strong>Escute sem julgar:</strong> Deixe a pessoa falar no tempo dela. Acredite no relato relatado.</li>
          <li><strong>Respeite o tempo e as decisões dela:</strong> Sair de uma situação de abuso é um processo complexo que envolve medo, dependência financeira ou emocional. Não pressione.</li>
          <li><strong>Combine um sinal de alerta discreto:</strong> Pode ser uma palavra-chave por mensagem ou uma ligação para emergência se ela precisar.</li>
          <li><strong>Ofereça ajuda prática:</strong> Guardar uma cópia de documentos importantes, oferecer abrigo temporário ou ir junto até um serviço de atendimento.</li>
          <li><strong>Em perigo imediato:</strong> Se presenciar uma agressão em andamento, ligue 190 (Polícia Militar).</li>
        </ul>
      </section>

      <section style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-subtle)', border: '1px solid var(--border-subtle)' }}>
        <h2>O que evitar dizer (e o que dizer em vez disso)</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
          {[
            {
              evite: "“Por que você simplesmente não vai embora?”",
              prefira: "“Sei que é uma situação difícil. Como posso apoiar você com segurança?”"
            },
            {
              evite: "“Você precisa denunciar isso agora!”",
              prefira: "“Existem serviços que podem orientar você sem compromisso. Quer que eu pesquise os horários com você?”"
            },
            {
              evite: "“Mas ele(a) sempre pareceu uma pessoa tão boa...”",
              prefira: "“Eu acredito no que você está me contando e estou do seu lado.”"
            }
          ].map((item, idx) => (
            <div key={idx} style={{ padding: '1rem', borderRadius: 'var(--radius-subtle)', backgroundColor: '#F9F8F6', border: '1px solid var(--border-subtle)' }}>
              <p style={{ color: 'var(--emergency-red)', fontWeight: 'bold', fontSize: '0.95rem' }}>❌ EVITE:</p>
              <p style={{ marginBottom: '0.5rem', fontStyle: 'italic' }}>{item.evite}</p>
              <p style={{ color: 'var(--brand-deep-green)', fontWeight: 'bold', fontSize: '0.95rem' }}>✅ PREFIRA:</p>
              <p style={{ fontStyle: 'italic' }}>{item.prefira}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};