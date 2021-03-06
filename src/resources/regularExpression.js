export const operator = /[+\-*/^]/;
export const operatorNegativeDecimal = /[+\-*/^~\.]/;
export const decimal = /\./;
export const number = /[0-9]/;
export const nonZeroNumber = /[1-9]/;
export const consecutiveOperator = /[+\-*/^][+\-*/^]/;
export const multiplyDivideAdd = /[*/+]/;
export const multiplyDivide = /[*/]/;
export const addSubtract = /[+-]/;
export const subtract = /-/;
export const parens = /(\(|\))/;
export const parenthetical = /\(.*\)/;
