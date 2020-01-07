import * as RegEx from "./regularExpression.js";
import * as Character from "./buttonCharacters.js";
import * as Error from "./errorMessages.js";

const indexOfFirstMatch = (
  stringToSearch,
  stringToMatchOne,
  stringToMatchTwo
) => {
  if (
    stringToSearch.indexOf(stringToMatchOne) < 0 &&
    stringToSearch.indexOf(stringToMatchTwo) >= 0
  )
    return stringToSearch.indexOf(stringToMatchTwo);
  else if (
    stringToSearch.indexOf(stringToMatchTwo) < 0 &&
    stringToSearch.indexOf(stringToMatchOne) >= 0
  )
    return stringToSearch.indexOf(stringToMatchOne);
  else if (
    stringToSearch.indexOf(stringToMatchOne) >= 0 &&
    stringToSearch.indexOf(stringToMatchTwo) >= 0
  )
    return stringToSearch.indexOf(stringToMatchOne) <
      stringToSearch.indexOf(stringToMatchTwo)
      ? stringToSearch.indexOf(stringToMatchOne)
      : stringToSearch.indexOf(stringToMatchTwo);
  else return -1;
};

const findStartOfLeftNumber = (formulaString, operatorIndex) => {
  let leftNumberStartIndex = operatorIndex - 1;
  while (leftNumberStartIndex > 0) {
    if (RegEx.operator.test(formulaString.charAt(leftNumberStartIndex))) {
      leftNumberStartIndex++;
      break;
    } else leftNumberStartIndex--;
  }
  return leftNumberStartIndex;
};

const findEndOfRightNumber = (formulaString, operatorIndex) => {
  let rightNumberEndIndex = operatorIndex + 1;
  while (rightNumberEndIndex < formulaString.length - 1) {
    if (RegEx.operator.test(formulaString.charAt(rightNumberEndIndex))) {
      rightNumberEndIndex--;
      break;
    } else rightNumberEndIndex++;
  }
  return rightNumberEndIndex;
};

const findLeftNumber = (formulaString, numberStartIndex, operatorIndex) => {
  return formulaString
    .slice(numberStartIndex, operatorIndex)
    .replace(
      Character.NEGATIVECHARACTER,
      Character.STRINGMATHNEGATIVECHARACTER
    );
};

const findRightNumber = (formulaString, operatorIndex, numberEndIndex) => {
  return formulaString
    .slice(operatorIndex + 1, numberEndIndex + 1)
    .replace(
      Character.NEGATIVECHARACTER,
      Character.STRINGMATHNEGATIVECHARACTER
    );
};

const performStringMath = (numStringOne, operatorString, numStringTwo) => {
  let numOne = Number(numStringOne);
  let numTwo = Number(numStringTwo);

  if (operatorString == Character.ADDCHARACTER) {
    let result = numOne + numTwo;
    return result
      .toString()
      .replace(Character.SUBTRACTCHARACTER, Character.NEGATIVECHARACTER);
  } else if (operatorString == Character.SUBTRACTCHARACTER) {
    let result = numOne - numTwo;
    return result
      .toString()
      .replace(Character.SUBTRACTCHARACTER, Character.NEGATIVECHARACTER);
  } else if (operatorString == Character.MULTIPLYCHARACTER) {
    let result = numOne * numTwo;
    return result
      .toString()
      .replace(Character.SUBTRACTCHARACTER, Character.NEGATIVECHARACTER);
  } else if (operatorString == Character.DIVIDECHARACTER) {
    let result = numOne / numTwo;
    return result
      .toString()
      .replace(Character.SUBTRACTCHARACTER, Character.NEGATIVECHARACTER);
  } else if (operatorString == Character.EXPONENTCHARACTER) {
    let result = Math.pow(numOne, numTwo);
    return result
      .toString()
      .replace(Character.SUBTRACTCHARACTER, Character.NEGATIVECHARACTER);
  } else return "";
};

const performOperation = (formulaString, operatorIndex) => {
  console.log(formulaString);
  let leftNumberStartIndex = findStartOfLeftNumber(
    formulaString,
    operatorIndex
  );
  let rightNumberEndIndex = findEndOfRightNumber(formulaString, operatorIndex);

  let leftNumber = findLeftNumber(
    formulaString,
    leftNumberStartIndex,
    operatorIndex
  );
  let rightNumber = findRightNumber(
    formulaString,
    operatorIndex,
    rightNumberEndIndex
  );

  let resultOfOperation = performStringMath(
    leftNumber,
    formulaString.charAt(operatorIndex),
    rightNumber
  );

  console.log("leftNumber is: " + leftNumber);
  console.log("rightNumber is: " + rightNumber);
  console.log("result is: " + resultOfOperation);

  return formulaString
    .slice(0, leftNumberStartIndex)
    .concat(resultOfOperation)
    .concat(formulaString.slice(rightNumberEndIndex + 1));
};

const performPOfPEMDAS = formulaString => {
  let closeParenIndex = 0;
  let openParenIndex = 0;

  while (RegEx.parens.test(formulaString)) {
    for (let i = 0; i < formulaString.length; i++) {
      if (formulaString[i] == Character.RIGHTPARENCHARACTER) {
        closeParenIndex = i;
        break;
      }
    }

    for (let i = closeParenIndex; i >= 0; i--) {
      if (formulaString[i] == Character.LEFTPARENCHARACTER) {
        openParenIndex = i;
        break;
      }
    }

    formulaString = formulaString
      .slice(0, openParenIndex)
      .concat(
        performPEMDAS(formulaString.slice(openParenIndex + 1, closeParenIndex))
      )
      .concat(formulaString.slice(closeParenIndex + 1));
  }
  return formulaString;
};

const performEOfPEMDAS = formulaString => {
  let operatorIndex = 0;

  while (formulaString.indexOf(Character.EXPONENTCHARACTER) >= 0) {
    operatorIndex = formulaString.indexOf(Character.EXPONENTCHARACTER);
    formulaString = performOperation(formulaString, operatorIndex);
  }
  return formulaString;
};

const performMDOfPEMDAS = formulaString => {
  let operatorIndex = 0;

  while (RegEx.multiplyDivide.test(formulaString)) {
    operatorIndex = indexOfFirstMatch(
      formulaString,
      Character.MULTIPLYCHARACTER,
      Character.DIVIDECHARACTER
    );
    formulaString = performOperation(formulaString, operatorIndex);
  }
  return formulaString;
};

const performASOfPEMDAS = formulaString => {
  let operatorIndex = 0;

  while (RegEx.addSubtract.test(formulaString)) {
    operatorIndex = indexOfFirstMatch(
      formulaString,
      Character.ADDCHARACTER,
      Character.SUBTRACTCHARACTER
    );
    formulaString = performOperation(formulaString, operatorIndex);
  }
  return formulaString;
};

export default function performPEMDAS(formulaString) {
  let parenBalance = 0;

  for (let i = 0; i < formulaString.length; i++) {
    if (formulaString[i] == Character.LEFTPARENCHARACTER) parenBalance++;
    else if (formulaString[i] == Character.RIGHTPARENCHARACTER) parenBalance--;
  }

  if (parenBalance != 0) return Error.UNBALANCEDPARENTHESESERROR;
  else
    return performASOfPEMDAS(
      performMDOfPEMDAS(performEOfPEMDAS(performPOfPEMDAS(formulaString)))
    );
}
