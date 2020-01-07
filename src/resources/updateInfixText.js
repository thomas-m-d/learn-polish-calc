import { initialState } from "../store.js";
import * as RegEx from "./regularExpression.js";
import * as Character from "./buttonCharacters.js";

const operatorArray = [
  Character.ADDCHARACTER,
  Character.SUBTRACTCHARACTER,
  Character.MULTIPLYCHARACTER,
  Character.DIVIDECHARACTER,
  Character.EXPONENTCHARACTER
];

const doesRightmostNumberStartWithZero = formulaString => {
  if (
    (formulaString.length == 1 &&
      formulaString.charAt(0) == Character.ZEROCHARACTER) ||
    (RegEx.operator.test(formulaString.charAt(formulaString.length - 2)) &&
      formulaString.charAt(formulaString.length - 1) == Character.ZEROCHARACTER)
  )
    return true;
  else return false;
};

const findStringIndexOfRightmostOperator = formulaString => {
  let numberStartIndex = 0;
  for (let i = 0; i < operatorArray.length - 1; i++) {
    if (numberStartIndex < formulaString.lastIndexOf(operatorArray[i]))
      numberStartIndex = formulaString.lastIndexOf(operatorArray[i]);
  }
  return numberStartIndex;
};

const doesRightmostNumberHaveDecimal = formulaString => {
  if (!RegEx.operator.test(formulaString))
    return RegEx.decimal.test(formulaString) ? true : false;
  else {
    let numString = formulaString.slice(
      findStringIndexOfRightmostOperator(formulaString) + 1
    );
    return RegEx.decimal.test(numString) ? true : false;
  }
};

const isStringSimpleFormula = formulaString => {
  if (!RegEx.operator.test(formulaString) || RegEx.parens.test(formulaString))
    return false;

  let leftNumString = formulaString
    .slice(0, formulaString.search(RegEx.operator))
    .replace(Character.NEGATIVECHARACTER, Character.SUBTRACTCHARACTER);

  let rightNumString = formulaString
    .slice(formulaString.search(RegEx.operator) + 1)
    .replace(Character.NEGATIVECHARACTER, Character.SUBTRACTCHARACTER);

  if (
    leftNumString.length == 0 ||
    rightNumString.length == 0 ||
    Number.isNaN(Number(leftNumString)) ||
    Number.isNaN(Number(rightNumString))
  )
    return false;
  else return true;
};

const isStringComplexFormulaWithOpenParens = formulaString => {
  let simplifiedFormulaString = JSON.parse(JSON.stringify(formulaString));
  let dount = 0;

  console.log("simplifiedFormulaString is: " + simplifiedFormulaString);
  console.log(RegEx.parenthetical.exec(simplifiedFormulaString));

  while (RegEx.parenthetical.test(simplifiedFormulaString) && dount < 5) {
    console.log(dount);
    simplifiedFormulaString = simplifiedFormulaString.replace(
      RegEx.parenthetical,
      ""
    );
    dount++;
  }

  if (simplifiedFormulaString.search(Character.LEFTPARENCHARACTER) >= 0)
    return true;
  else return false;
};

const canParenthesesBeOpened = formulaString => {
  if (
    RegEx.operator.test(formulaString[formulaString.length - 1]) ||
    formulaString[formulaString.length - 1] == Character.LEFTPARENCHARACTER
  )
    return true;
  else return false;
};

const canParenthesesBeClosed = formulaString => {
  let unclosedParensCount = 0;

  for (let i = 0; i < formulaString.length; i++) {
    if (formulaString[i] == Character.LEFTPARENCHARACTER) unclosedParensCount++;
    else if (formulaString[i] == Character.RIGHTPARENCHARACTER)
      unclosedParensCount--;
  }

  return unclosedParensCount > 0 &&
    (formulaString[formulaString.lenth - 1] == Character.RIGHTPARENCHARACTER ||
      RegEx.number.test(formulaString[formulaString.length - 1]))
    ? true
    : false;
};

const canNegativeSignBeConcated = formulaString => {
  if (
    RegEx.operator.test(formulaString.charAt(formulaString.length - 1)) ||
    formulaString.charAt(formulaString.length - 1) ==
      Character.NEGATIVECHARACTER ||
    formulaString.charAt(formulaString.length - 1) ==
      Character.LEFTPARENCHARACTER
  )
    return true;
  else return false;
};

export default function updateInfixText(state, action) {
  let textToUpdate = JSON.parse(JSON.stringify(state.infixText));
  if (action.character == Character.ZEROCHARACTER) {
    if (doesRightmostNumberStartWithZero(textToUpdate)) return textToUpdate;
    else return textToUpdate.concat(action.character);
  } else if (action.character == Character.DECIMALCHARACTER) {
    if (doesRightmostNumberHaveDecimal(textToUpdate)) return textToUpdate;
    else return textToUpdate.concat(action.character);
  } else if (action.character == Character.RIGHTPARENCHARACTER) {
    if (canParenthesesBeClosed(textToUpdate))
      return textToUpdate.concat(action.character);
    else return textToUpdate;
  } else if (action.character == Character.LEFTPARENCHARACTER) {
    if (
      textToUpdate.length == 1 &&
      textToUpdate.charAt(0) == Character.ZEROCHARACTER
    )
      return action.character;
    else if (canParenthesesBeOpened(textToUpdate))
      return textToUpdate.concat(action.character);
    else return textToUpdate;
  } else if (action.character == Character.NEGATIVECHARACTER) {
    if (
      textToUpdate.length == 1 &&
      textToUpdate.charAt(0) == Character.ZEROCHARACTER
    )
      return action.character;
    else if (canNegativeSignBeConcated(textToUpdate))
      return textToUpdate.concat(action.character);
    else return textToUpdate;
  } else if (RegEx.operator.test(action.character)) {
    if (
      RegEx.operator.test(textToUpdate[textToUpdate.length - 1]) ||
      textToUpdate[textToUpdate.length - 1] == Character.LEFTPARENCHARACTER
    )
      return textToUpdate;
    else return textToUpdate.concat(action.character);
  } else if (RegEx.nonZeroNumber.test(action.character)) {
    if (
      textToUpdate.length == 1 &&
      textToUpdate.charAt(0) == Character.ZEROCHARACTER
    )
      return action.character;
    else return textToUpdate.concat(action.character);
  } else return textToUpdate.concat(action.character);
}
