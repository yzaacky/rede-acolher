import React from 'react';

export const MateriaisEducativos: React.FC = () => (
	<article className="content-page">
		<h1>Campanhas e materiais</h1>
		<p className="lead">Conteúdos para reconhecer situações de violência, conversar sobre proteção e compartilhar informação confiável.</p>
		<div className="content-grid">
			<section className="info-card"><h2>Informação para compartilhar</h2><p>Falar sobre os sinais de violência ajuda a reduzir o isolamento e aproxima pessoas da rede de proteção.</p></section>
			<section className="info-card"><h2>Planejamento de segurança</h2><p>Escolha contatos de confiança, combine uma palavra-código e mantenha documentos importantes acessíveis quando isso for seguro.</p></section>
			<section className="info-card"><h2>Fontes oficiais</h2><p>Consulte serviços públicos e canais nacionais para receber orientação atualizada sobre direitos e encaminhamentos.</p></section>
		</div>
	</article>
);
