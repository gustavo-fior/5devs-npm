import { companyData } from "./generators/empresa";
import { personData } from "./generators/pessoa";
import { phone } from "./generators/telefone";
import { getUtils } from "./generators/utils";
import { vehicle } from "./generators/veiculo";

export function empresa(mask?: boolean) {
  return companyData(mask);
}

export function pessoa(mask?: boolean) {
  return personData(mask);
}

// TODO: Endereço 🏠

export function telefone(mask?: boolean) {
  return phone(mask);
}

export function veiculo(mask?: boolean) {
  return vehicle(mask);
}

export function uteis() {
  getUtils();
}




