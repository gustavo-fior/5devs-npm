"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cpf = cpf;
exports.rg = rg;
exports.email = email;
exports.aniversario = aniversario;
exports.personData = personData;
const nomes_fem_1 = require("../data/nomes-fem");
const nomes_masc_1 = require("../data/nomes-masc");
const sobrenomes_1 = require("../data/sobrenomes");
const utils_1 = require("../utils/utils");
function cpf(mask) {
    const total_array = 9;
    const n = 9;
    const [n1, n2, n3, n4, n5, n6, n7, n8, n9] = (0, utils_1.create_array)(total_array, n);
    let d1 = n9 * 2 +
        n8 * 3 +
        n7 * 4 +
        n6 * 5 +
        n5 * 6 +
        n4 * 7 +
        n3 * 8 +
        n2 * 9 +
        n1 * 10;
    d1 = 11 - (0, utils_1.mod)(d1, 11);
    if (d1 >= 10)
        d1 = 0;
    let d2 = d1 * 2 +
        n9 * 3 +
        n8 * 4 +
        n7 * 5 +
        n6 * 6 +
        n5 * 7 +
        n4 * 8 +
        n3 * 9 +
        n2 * 10 +
        n1 * 11;
    d2 = 11 - (0, utils_1.mod)(d2, 11);
    if (d2 >= 10)
        d2 = 0;
    if (mask) {
        return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;
    }
    return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`;
}
function rg(mask) {
    const total_array = 8;
    const n = 9;
    const [n1, n2, n3, n4, n5, n6, n7, n8] = (0, utils_1.create_array)(total_array, n);
    const d1 = 0;
    const d2 = 0;
    if (mask) {
        return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}-${d1}${d2}`;
    }
    return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${d1}${d2}`;
}
function email(nome) {
    const dom = [
        "@gmail.com",
        "@hotmail.com",
        "@outlook.com",
        "@yahoo.com",
        "@bol.com.br",
        "@uol.com.br",
        "@terra.com.br",
        "@globo.com",
    ];
    return `${(0, utils_1.cleanString)(nome.toLowerCase().replaceAll(" ", "_"))}${dom[Math.floor(Math.random() * dom.length)]}`;
}
function aniversario() {
    const dia = Math.floor(Math.random() * 28) + 1;
    const mes = Math.floor(Math.random() * 12) + 1;
    const ano = Math.floor(Math.random() * (2003 - 1950)) + 1950;
    return `${ano}-${mes < 10 ? "0" + mes : mes}-${dia < 10 ? "0" + dia : dia}`;
}
function signo(dataNascimento) {
    const data = new Date(dataNascimento);
    const mes = data.getMonth();
    const dia = data.getDate();
    switch (true) {
        case (mes === 0 && dia >= 20) || (mes === 1 && dia <= 18):
            return "Aquário";
        case (mes === 1 && dia >= 19) || (mes === 2 && dia <= 20):
            return "Peixes";
        case (mes === 2 && dia >= 21) || (mes === 3 && dia <= 19):
            return "Áries";
        case (mes === 3 && dia >= 20) || (mes === 4 && dia <= 20):
            return "Touro";
        case (mes === 4 && dia >= 21) || (mes === 5 && dia <= 20):
            return "Gêmeos";
        case (mes === 5 && dia >= 21) || (mes === 6 && dia <= 22):
            return "Câncer";
        case (mes === 6 && dia >= 23) || (mes === 7 && dia <= 22):
            return "Leão";
        case (mes === 7 && dia >= 23) || (mes === 8 && dia <= 22):
            return "Virgem";
        case (mes === 8 && dia >= 23) || (mes === 9 && dia <= 22):
            return "Libra";
        case (mes === 9 && dia >= 23) || (mes === 10 && dia <= 21):
            return "Escorpião";
        case (mes === 10 && dia >= 22) || (mes === 11 && dia <= 21):
            return "Sagitário";
        case (mes === 11 && dia >= 22) || (mes === 0 && dia <= 19):
            return "Capricórnio";
        default:
            return "Data inválida";
    }
}
function personData(mask) {
    const masc = Math.random() < 0.5;
    const nome = masc
        ? nomes_masc_1.nomesMasc[Math.floor(Math.random() * nomes_masc_1.nomesMasc.length)]
        : nomes_fem_1.nomesFem[Math.floor(Math.random() * nomes_fem_1.nomesFem.length)];
    const sobrenome = sobrenomes_1.sobrenomes[Math.floor(Math.random() * sobrenomes_1.sobrenomes.length)];
    const dataNascimento = aniversario();
    if (!nome || !sobrenome)
        throw new Error("Nome ou sobrenome não encontrado");
    return {
        nome: nome + " " + sobrenome,
        sexo: masc ? "Masculino" : "Feminino",
        email: email(nome + " " + sobrenome),
        dataNascimento,
        signo: signo(dataNascimento),
        cpf: cpf(mask),
        rg: rg(mask),
        nomePai: nomes_masc_1.nomesMasc[Math.floor(Math.random() * nomes_masc_1.nomesMasc.length)] + " " + sobrenome,
        nomeMae: nomes_fem_1.nomesFem[Math.floor(Math.random() * nomes_fem_1.nomesFem.length)] +
            " " +
            sobrenomes_1.sobrenomes[Math.floor(Math.random() * sobrenomes_1.sobrenomes.length)],
    };
}
