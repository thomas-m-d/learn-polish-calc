import * as RegEx from "./regularExpression.js";
import * as Character from "./buttonCharacters.js";

const cleanEndingOperators = formulaString => {
  let str = JSON.parse(JSON.stringify(formulaString));

  while (RegEx.operator.test(str.charAt(str.length - 1))) {
    str = str.slice(0, str.length - 2);
  }

  return str;
};

const cleanConsecutiveOperators = formulaString => {
  let str = JSON.parse(JSON.stringify(formulaString));
  let count = 0;

  while (RegEx.consecutiveOperator.test(str)) {
    if (
      RegEx.operator.test(str.charAt(count)) &&
      RegEx.multiplyDivideAdd.test(str.charAt(count + 1))
    ) {
      str = str.slice(0, count).concat(str.slice(count + 1));
      count = 0;
    } else {
      count++;
    }
  }
  return str;
};

const cleanDoubleNegatives = formulaString => {
  let searchString = Character.NEGATIVECHARACTER.concat(
    Character.NEGATIVECHARACTER
  );
  let doubleNegativeIndex = formulaString.search(searchString);

  while (doubleNegativeIndex >= 0) {
    if (doubleNegativeIndex == 0)
      formulaString = formulaString.slice(doubleNegativeIndex + 2);
    else
      formulaString = formulaString
        .slice(0, doubleNegativeIndex)
        .concat(formulaString.slice(doubleNegativeIndex + 2));

    doubleNegativeIndex = formulaString.search(searchString);
  }
  return formulaString;
};

export default function cleanMisplacedOperators(formulaString) {
  return cleanDoubleNegatives(
    cleanConsecutiveOperators(cleanEndingOperators(formulaString))
  );
}
