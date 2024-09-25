export declare function empresa(mask?: boolean): {
    razaoSocial: string;
    cnpj: string;
    inscricaoEstadual: string;
    dataAbertura: string;
    site: string;
    email: string;
};
export declare function pessoa(mask?: boolean): {
    nome: string;
    sexo: string;
    email: string;
    dataNascimento: string;
    signo: string;
    cpf: string;
    rg: string;
    nomePai: string;
    nomeMae: string;
};
export declare function telefone(mask?: boolean): string;
export declare function veiculo(mask?: boolean): {
    placa: string;
    renavam: string;
    marca: string;
    modelo: string;
    tipo: string;
    ano: string;
    cor: string;
    combustivel: string;
    municipio: string;
    uf: string;
};
export declare function uteis(): void;
