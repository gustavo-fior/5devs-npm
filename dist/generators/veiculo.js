"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicle = void 0;
const veiculos_1 = require("../data/veiculos");
const cores_1 = require("../data/cores");
const combustiveis_1 = require("../data/combustiveis");
const estados_municipios_1 = require("../data/estados-municipios");
const vehicle = (mask) => {
    const veiculo = veiculos_1.veiculos[Math.floor(Math.random() * veiculos_1.veiculos.length)];
    const estado = estados_municipios_1.estados.estados[Math.floor(Math.random() * estados_municipios_1.estados.estados.length)];
    const municipio = estado?.cidades[Math.floor(Math.random() * estado.cidades.length)];
    return {
        placa: gerarPlaca(mask),
        renavam: gerarRenavam(mask),
        marca: veiculo?.marca ?? "Marca não informada",
        modelo: veiculo?.modelo ?? "Modelo não informado",
        tipo: veiculo?.tipo ?? "Tipo não informado",
        ano: gerarAno().toString(),
        cor: cores_1.cores[Math.floor(Math.random() * cores_1.cores.length)] ?? "Cor não informada",
        combustivel: combustiveis_1.combustiveis[Math.floor(Math.random() * combustiveis_1.combustiveis.length)] ??
            "Combustível não informado",
        municipio: municipio ?? "Município não informado",
        uf: estado?.sigla ?? "UF não informada",
    };
};
exports.vehicle = vehicle;
const gerarPlaca = (mask) => {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const letra = () => letras[Math.floor(Math.random() * letras.length)];
    const numero = () => numeros[Math.floor(Math.random() * numeros.length)];
    if (mask) {
        return `${letra()}${letra()}${letra()}-${numero()}${letra()}${numero()}${numero()}`;
    }
    return `${letra()}${letra()}${letra()}${numero()}${letra()}${numero()}${numero()}`;
};
const gerarAno = () => {
    const ano = Math.floor(Math.random() * (2024 - 1990) + 1990);
    return ano;
};
function gerarRenavam(mask) {
    const n0 = Math.floor(Math.random() * 9 + 0);
    const n1 = Math.floor(Math.random() * 9 + 0);
    const n2 = Math.floor(Math.random() * 9 + 0);
    const n3 = Math.floor(Math.random() * 9 + 0);
    const n4 = Math.floor(Math.random() * 9 + 0);
    const n5 = Math.floor(Math.random() * 9 + 0);
    const n6 = Math.floor(Math.random() * 9 + 0);
    const n7 = Math.floor(Math.random() * 9 + 0);
    const n8 = Math.floor(Math.random() * 9 + 0);
    const n9 = Math.floor(Math.random() * 9 + 0);
    let moduloOnze = ((n0 * 3 +
        n1 * 2 +
        n2 * 9 +
        n3 * 8 +
        n4 * 7 +
        n5 * 6 +
        n6 * 5 +
        n7 * 4 +
        n8 * 3 +
        n9 * 2) *
        10) %
        11;
    if (moduloOnze == 10) {
        moduloOnze = 0;
    }
    if (mask) {
        return `${n0}${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}-${moduloOnze}`;
    }
    return `${n0}${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${moduloOnze}`;
}
