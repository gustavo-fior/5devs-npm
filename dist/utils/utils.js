"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod = exports.create_array = void 0;
exports.cleanString = cleanString;
function cleanString(str) {
    const charMap = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
        'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U',
        'à': 'a', 'è': 'e', 'ì': 'i', 'ò': 'o', 'ù': 'u',
        'À': 'A', 'È': 'E', 'Ì': 'I', 'Ò': 'O', 'Ù': 'U',
        'ã': 'a', 'ẽ': 'e', 'ĩ': 'i', 'õ': 'o', 'ũ': 'u',
        'Ã': 'A', 'Ẽ': 'E', 'Ĩ': 'I', 'Õ': 'O', 'Ũ': 'U',
        'ç': 'c', 'Ç': 'C', 'ñ': 'n', 'Ñ': 'N', 'Ê': 'E',
        'ê': 'e', 'Â': 'A', 'â': 'a', 'Ô': 'O', 'ô': 'o',
        'Î': 'I', 'î': 'i', 'Û': 'U', 'û': 'u', 'Ü': 'U',
    };
    return str.replace(/[^a-zA-Z0-9\s]/g, (match) => charMap[match] ?? match);
}
const create_array = (total, numero) => Array.from(Array(total), () => Math.round(Math.random() * numero));
exports.create_array = create_array;
const mod = (dividendo, divisor) => Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);
exports.mod = mod;
