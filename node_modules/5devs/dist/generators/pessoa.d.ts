export declare function cpf(mask?: boolean): string;
export declare function rg(mask?: boolean): string;
export declare function email(nome: string): string;
export declare function aniversario(): string;
export declare function personData(mask?: boolean): {
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
