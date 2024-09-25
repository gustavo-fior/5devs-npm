"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresa = empresa;
exports.pessoa = pessoa;
exports.telefone = telefone;
exports.veiculo = veiculo;
exports.uteis = uteis;
const empresa_1 = require("./generators/empresa");
const pessoa_1 = require("./generators/pessoa");
const telefone_1 = require("./generators/telefone");
const utils_1 = require("./generators/utils");
const veiculo_1 = require("./generators/veiculo");
function empresa(mask) {
    return (0, empresa_1.companyData)(mask);
}
function pessoa(mask) {
    return (0, pessoa_1.personData)(mask);
}
// TODO: Endereço 🏠
function telefone(mask) {
    return (0, telefone_1.phone)(mask);
}
function veiculo(mask) {
    return (0, veiculo_1.vehicle)(mask);
}
function uteis() {
    (0, utils_1.getUtils)();
}
