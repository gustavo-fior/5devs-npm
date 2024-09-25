"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phone = phone;
const utils_1 = require("../utils/utils");
function phone(mask) {
    const a1 = Math.floor(Math.random() * 9) + 1;
    const [n2, n3, n4, n5, n6, n7, n8, n9, n10] = (0, utils_1.create_array)(10, 9);
    if (mask) {
        return `(${a1}${n2}) 9${n3}${n4}${n5}${n6}-${n7}${n8}${n9}${n10}`;
    }
    return `${a1}${n2}9${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}`;
}
