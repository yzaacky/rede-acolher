import React from 'react';
import { institutionConfig } from '../config/institutionConfig';

export const SobreOProjeto: React.FC = () => {
  const { extensionProject, partnerInstitution } = institutionConfig;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1>Sobre o Projeto Rede Acolher</h1>
      
      <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-subtle)', border: '1px solid var(--border-subtle)', marginBottom: '2rem' }}>
        <h2>Atividade Curricular de Extensão Universitária</h2>
        <p>
          Este site é resultado de uma atividade prática de extensão universitária do curso de <strong>{extensionProject.course}</strong> do <strong>{extensionProject.university}</strong>.
        </p>
        <p style={{ marginTop: '1rem' }}>
          O projeto foi desenvolvido em estreita colaboração com a instituição parceira <strong>{partnerInstitution.name}</strong>, visando disponibilizar à comunidade um recurso digital acessível, educativo e humanizado para o enfrentamento da violência doméstica.
        </p>
      </div>

      <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-subtle)', border: '1px solid var(--border-subtle)', marginBottom: '2rem' }}>
        <h2>Alinhamento com o ODS 16 da ONU</h2>
        <p style={{ fontWeight: '500', color: 'var(--brand-deep-green)' }}>
          {extensionProject.ods}
        </p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
          O Objetivo de Desenvolvimento Sustentável 16 busca promover sociedades包容 (inclusivas) e pacíficas para o desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis.
        </p>
      </div>

      <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-subtle)', border: '1px solid var(--border-subtle)' }}>
        <h2>Ficha Técnica e Responsáveis</h2>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
          <li><strong>Estudante Desenvolvedor(a):</strong> {extensionProject.studentName}</li>
          <li><strong>Instituição Parceira:</strong> {partnerInstitution.name}</li>
          <li><strong>Responsável na Instituição:</strong> {partnerInstitution.responsiblePerson}</li>
          <li><strong>Município / UF:</strong> {partnerInstitution.cityState}</li>
          <li><strong>Período Letivo:</strong> {extensionProject.developmentPeriod}</li>
          <li><strong>Última Revisão de Conteúdo:</strong> {institutionConfig.lastRevisionDate}</li>
        </ul>
      </div>
    </div>
  );
};