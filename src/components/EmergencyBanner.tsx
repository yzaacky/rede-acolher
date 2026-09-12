import React from 'react';
import { institutionConfig } from '../config/institutionConfig';

export const EmergencyBanner: React.FC = () => {
  return (
    <section 
      aria-label="Canais de emergência e atendimento imediato"
      className="emergency-banner"
      style={{
        backgroundColor: 'var(--emergency-bg)',
        borderLeft: '6px solid var(--emergency-red)',
        padding: '1.5rem',
        borderRadius: 'var(--radius-subtle)',
        margin: '2rem 0',
        border: '1px solid var(--emergency-border)',
        borderLeftWidth: '6px'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <span style={{ color: 'var(--emergency-red)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.5px' }}>
            🚨 Está acontecendo agora ou há risco imediato?
          </span>
          <h2 style={{ fontSize: '1.35rem', color: 'var(--emergency-red)', margin: '0.25rem 0' }}>
            Ligue para a Polícia Militar no 190
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            Se você ou alguém estiver em perigo imediato, procure um local seguro e acione a polícia. A ligação é gratuita e funciona 24 horas.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href={`tel:${institutionConfig.emergencyNumbers.police}`} className="btn btn-emergency">
            📞 Ligar 190 (Polícia Militar)
          </a>
          <a href={`tel:${institutionConfig.emergencyNumbers.womenCentral}`} className="btn btn-secondary">
            📞 Ligar 180 ( Central da Mulher )
          </a>
          <a href={`tel:${institutionConfig.emergencyNumbers.humanRights}`} className="btn btn-secondary">
            📞 Disque 100 (Direitos Humanos)
          </a>
        </div>
      </div>
    </section>
  );
};