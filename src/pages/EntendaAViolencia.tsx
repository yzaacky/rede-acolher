import React from 'react';

const types = [
	['Física', 'Ações que ofendem a integridade ou a saúde corporal.'],
	['Psicológica', 'Ameaças, humilhações, isolamento, vigilância e controle que causam sofrimento emocional.'],
	['Sexual', 'Qualquer constrangimento ou coerção para participar de uma relação ou prática sexual não desejada.'],
	['Patrimonial', 'Controle, retenção ou destruição de dinheiro, documentos, objetos e recursos.'],
	['Moral', 'Calúnia, difamação, injúria e exposição que atacam a reputação.']
];

export const EntendaAViolencia: React.FC = () => (
	<article className="content-page">
		<h1>Entenda a violência</h1>
		<p className="lead">A violência pode assumir diferentes formas e acontecer de maneira gradual. Nenhuma delas é culpa de quem sofre.</p>
		<div className="content-grid">{types.map(([title, description]) => <section className="info-card" key={title}><h2>Violência {title}</h2><p>{description}</p></section>)}</div>
	</article>
);
