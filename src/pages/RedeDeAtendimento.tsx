import React, { useState } from 'react';
import localServices from '../data/localServices.json';
import { institutionConfig } from '../config/institutionConfig';

export const RedeDeAtendimento: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('todos');

  const filteredServices = filterType === 'todos' 
    ? localServices 
    : localServices.filter(s => s.type === filterType);

  return (
    <div>
      <h1>Rede Local de Atendimento e Proteção</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        Abaixo estão os serviços públicos disponíveis para orientação, acolhimento e denúncia em <strong>{institutionConfig.partnerInstitution.cityState}</strong>.
      </p>

      {!institutionConfig.partnerInstitution.isVerified && (
        <div style={{ backgroundColor: '#FDF7EB', padding: '1rem', borderLeft: '4px solid var(--brand-warm-yellow)', borderRadius: '4px', marginBottom: '1.5rem' }}>
          <strong>ℹ️ Nota explicativa:</strong> Os dados locais apresentados abaixo são demonstrativos e serão validados presencialmente com a equipe do {institutionConfig.partnerInstitution.name} antes da entrega final do projeto.
        </div>
      )}

      <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <span>Filtrar por tipo:</span>
        {['todos', 'Assistência Social', 'Segurança Pública', 'Jurídico'].map(t => (
          <button
            key={t}
            onClick={() => setFilterType(t)}
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: '4px',
              border: '1px solid var(--brand-deep-green)',
              background: filterType === t ? 'var(--brand-deep-green)' : '#FFF',
              color: filterType === t ? '#FFF' : 'var(--brand-deep-green)',
              cursor: 'pointer'
            }}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {filteredServices.map(service => (
          <div key={service.id} style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: 'var(--radius-subtle)', border: '1px solid var(--border-subtle)' }}>
            {service.isPlaceholder && <span className="badge-demo">Dados locais em homologação</span>}
            <h2 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>{service.name}</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--brand-terracotta-dark)', fontWeight: 'bold' }}>{service.type}</p>
            <hr style={{ margin: '0.75rem 0', borderColor: 'var(--border-subtle)' }} />
            <p style={{ fontSize: '0.95rem' }}>📍 <strong>Endereço:</strong> {service.address}</p>
            <p style={{ fontSize: '0.95rem' }}>📞 <strong>Telefone:</strong> {service.phone}</p>
            <p style={{ fontSize: '0.95rem' }}>🕒 <strong>Horário:</strong> {service.hours}</p>
            <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
              <strong>Serviços:</strong> {service.services}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};