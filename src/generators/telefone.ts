import { create_array } from "../utils/utils";

export function phone(mask?: boolean): string {
  const a1 = Math.floor(Math.random() * 9) + 1;

  const [n2, n3, n4, n5, n6, n7, n8, n9, n10] = create_array(10, 9);

  if (mask) {
    return `(${a1}${n2}) 9${n3}${n4}${n5}${n6}-${n7}${n8}${n9}${n10}`;
  }

  return `${a1}${n2}9${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}`;
}
