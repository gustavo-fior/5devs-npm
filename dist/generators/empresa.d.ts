export declare function cnpj(mask?: boolean): string;
export declare function inscricaoEstadual(mask?: boolean): string;
export declare function companyData(mask?: boolean): {
    razaoSocial: string;
    cnpj: string;
    inscricaoEstadual: string;
    dataAbertura: string;
    site: string;
    email: string;
};
export declare function dataAbertura(): string;
export declare function site(name: string, activity: string): string;
export declare function email(name: string): string;
