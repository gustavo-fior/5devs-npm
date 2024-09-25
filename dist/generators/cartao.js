"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartao = cartao;
const CreditCardTypes_1 = __importDefault(require("@mihnea.dev/credit-card-generator/dist/types/CreditCardTypes"));
const nomes_fem_1 = require("../data/nomes-fem");
const nomes_masc_1 = require("../data/nomes-masc");
const credit_card_generator_1 = __importDefault(require("@mihnea.dev/credit-card-generator"));
const sobrenomes_1 = require("../data/sobrenomes");
function cartao() {
    const cardNumberAndFlag = generateCardNumber();
    const expirationDate = generateExpirationDate();
    const cvv = generateCVV();
    const masc = Math.random() < 0.5;
    const holderFirstName = masc
        ? nomes_masc_1.nomesMasc[Math.floor(Math.random() * nomes_masc_1.nomesMasc.length)]
        : nomes_fem_1.nomesFem[Math.floor(Math.random() * nomes_fem_1.nomesFem.length)];
    const holderLastName = sobrenomes_1.sobrenomes[Math.floor(Math.random() * sobrenomes_1.sobrenomes.length)];
    return {
        numero: cardNumberAndFlag.cardNumber,
        expiracao: expirationDate,
        cvv,
        bandeira: cardNumberAndFlag.flag,
        titular: `${holderFirstName} ${holderLastName}`,
    };
}
function generateCardNumber() {
    const type = Math.random() < 0.5 ? CreditCardTypes_1.default.VISA : CreditCardTypes_1.default.MasterCard;
    const creditCard = new credit_card_generator_1.default();
    const card = creditCard.generate_one(type);
    return {
        cardNumber: card.number.replace(/(.{4})/g, "$1-").slice(0, -1),
        flag: type,
    };
}
function generateExpirationDate() {
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getFullYear() + Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 12), 1);
    const month = (futureDate.getMonth() + 1).toString().padStart(2, "0");
    const year = futureDate.getFullYear().toString().slice(-2);
    return `${month}-${year}`;
}
function generateCVV() {
    return Math.floor(Math.random() * 900 + 100).toString();
}
