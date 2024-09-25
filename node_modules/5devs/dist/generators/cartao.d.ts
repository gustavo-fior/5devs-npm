interface CreditCardData {
    numero: string;
    expiracao: string;
    cvv: string;
    bandeira: string;
    titular: string;
}
export declare function cartao(): CreditCardData;
export {};
