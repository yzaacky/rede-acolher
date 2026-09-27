export interface InstitutionConfig {
projectName: string;
slogan: string;
partnerInstitution: {
    name: string;
    type: string;
    responsiblePerson: string;
    cityState: string;
    address: string;
    phone: string;
    email: string;
    workingHours: string;
    isVerified: boolean;
};
extensionProject: {
    university: string;
    course: string;
    studentName: string;
    developmentPeriod: string;
    ods: string;
};
emergencyNumbers: {
    police: string;
    womenCentral: string;
    humanRights: string;
};
lastRevisionDate: string;
}

export const institutionConfig: InstitutionConfig = {
projectName: "Rede Acolher",
slogan: "Informação, proteção e caminhos para pedir ajuda.",

partnerInstitution: {
    name: "Roentgen Diagnostico LDTA",
    type: "Diagnóstico por imagem",
    responsiblePerson: "Será atualizado posteriormente.",
    cityState: "Niterói/RJ",
    address: "Informação local a ser adicionada após validação com a instituição parceira.",
    phone: "21 30316100",
    email: "Atendimento@dme.med.br",
    workingHours: "Segunda a Sexta, das 08h às 17h",
    isVerified: false
},

extensionProject: {
    university: "UNIASSELVI - Centro Universitário Leonardo da Vinci",
    course: "Análise e Desenvolvimento de Sistemas",
    studentName: "Izaack Pires de Souza, Miguel Rodrigues Monteiro e Michel Abreu da Penha",
    developmentPeriod: "2026/1",
    ods: "ODS 16 - Paz, Justiça e Instituições Eficazes (ONU)"
},

emergencyNumbers: {
    police: "190",
    womenCentral: "180",
    humanRights: "100"
},

lastRevisionDate: "11 de Setembro de 2026"
};