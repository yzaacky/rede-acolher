import React from 'react';
import { institutionConfig } from '../config/institutionConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" style={{ backgroundColor: '#252927', color: '#F7F3EA', padding: '3rem 0 1.5rem 0', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        <div>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{institutionConfig.projectName}</h3>
          <p style={{ fontSize: '0.9rem', color: '#CBD5E1' }}>
            Site institucional e informativo sem fins lucrativos. Não realiza atendimento direto de emergências ou denúncias.
          </p>
          <p style={{ fontSize: '0.85rem', color: '#A1A1AA', marginTop: '0.75rem' }}>
            {institutionConfig.extensionProject.university} — {institutionConfig.extensionProject.ods}
          </p>
        </div>

        <div>
          <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '0.75rem' }}>Canais Oficiais e Nacionais</h4>
          <ul style={{ listStyle: 'none', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li>📞 <strong>190:</strong> Polícia Militar (Emergência)</li>
            <li>📞 <strong>180:</strong> Central de Atendimento à Mulher</li>
            <li>📞 <strong>100:</strong> Disque Direitos Humanos</li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '0.75rem' }}>Instituição Parceira</h4>
          <p style={{ fontSize: '0.9rem' }}>{institutionConfig.partnerInstitution.name}</p>
          <p style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>{institutionConfig.partnerInstitution.address}</p>
          <p style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>Horário: {institutionConfig.partnerInstitution.workingHours}</p>
        </div>
      </div>

      <div className="container" style={{ borderTop: '1px solid #3F4441', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.85rem', color: '#A1A1AA' }}>
        <p>Desenvolvido como atividade de extensão acadêmica. Fontes legais baseadas na Lei Federal nº 11.340/2006 (Lei Maria da Penha).</p>
        <p style={{ marginTop: '0.25rem' }}>Última atualização: {institutionConfig.lastRevisionDate}</p>
      </div>
    </footer>
  );
};