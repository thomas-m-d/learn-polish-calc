import * as RegEx from "./regularExpression.js";
import * as Character from "./buttonCharacters.js";

const isFormulaEnclosedByParens = infixFormulaString => {
  if (
    infixFormulaString.charAt(0) == Character.LEFTPARENCHARACTER &&
    infixFormulaString.charAt(infixFormulaString.length - 1) ==
      Character.RIGHTPARENCHARACTER
  ) {
    let parenCount = 0;
    for (let i = 1; i < infixFormulaString.length - 2; i++) {
      if (infixFormulaString.charAt(i) == Character.LEFTPARENCHARACTER)
        parenCount++;
      else if (infixFormulaString.charAt(i) == Character.RIGHTPARENCHARACTER)
        parenCount--;

      if (parenCount < 0) return false;
    }
    return true;
  } else return false;
};

const removeEnclosingParens = infixFormulaString => {
  return infixFormulaString.slice(1, infixFormulaString.length - 1);
};

const findMajorOperatorIndex = infixFormulaString => {
  let indicesOfFormulaStringToIgnore = [];

  if (isFormulaEnclosedByParens(infixFormulaString)) {
    let enclosingParenCount = 0;
    let copiedFormulaString = removeEnclosingParens(
      JSON.parse(JSON.stringify(infixFormulaString))
    );

    while (isFormulaEnclosedByParens(copiedFormulaString)) {
      enclosingParenCount++;
      removeEnclosingParens(copiedFormulaString);
    }

    for (let i = 0; i <= enclosingParenCount; i++)
      indicesOfFormulaStringToIgnore.push(i);

    for (
      let i = infixFormulaString.length - (1 + enclosingParenCount);
      i < infixFormulaString.length;
      i++
    )
      indicesOfFormulaStringToIgnore.push(i);
  }

  let parentheticalStartIndex = 0;
  let parenCount = 0;

  for (let i = 0; i < infixFormulaString.length; i++) {
    if (!indicesOfFormulaStringToIgnore.includes(i)) {
      if (infixFormulaString.charAt(i) == Character.LEFTPARENCHARACTER) {
        if (parenCount == 0) parentheticalStartIndex = i;
        parenCount++;
      } else if (
        infixFormulaString.charAt(i) == Character.RIGHTPARENCHARACTER
      ) {
        parenCount--;
        if (parenCount == 0) {
          for (let j = parentheticalStartIndex; j <= i; j++)
            indicesOfFormulaStringToIgnore.push(j);
        }
      }
    }
  }

  let multiplyDivideIndices = [];
  let exponentIndices = [];

  for (let i = infixFormulaString.length - 1; i >= 0; i--) {
    if (!indicesOfFormulaStringToIgnore.includes(i)) {
      if (RegEx.addSubtract.test(infixFormulaString.charAt(i))) return i;
      else if (RegEx.multiplyDivide.test(infixFormulaString.charAt(i)))
        multiplyDivideIndices.push(i);
      else if (infixFormulaString.charAt(i) == Character.EXPONENTCHARACTER)
        exponentIndices.push(i);
    }
  }

  if (multiplyDivideIndices.length > 0)
    return multiplyDivideIndices.sort((a, b) => a - b)[
      multiplyDivideIndices.length - 1
    ];
  else if (exponentIndices.length > 0)
    return exponentIndices.sort((a, b) => a - b)[exponentIndices.length - 1];
  else return -1;
};

export default function updatePolishText(infixFormulaString) {
  let polishFormulaString = JSON.parse(JSON.stringify(infixFormulaString));

  while (isFormulaEnclosedByParens(polishFormulaString)) {
    polishFormulaString = removeEnclosingParens(polishFormulaString);
  }

  if (
    !isNaN(
      polishFormulaString.replace(
        Character.NEGATIVECHARACTER,
        Character.STRINGMATHNEGATIVECHARACTER
      )
    )
  )
    return polishFormulaString.trim();
  else {
    let majorOperatorIndex = findMajorOperatorIndex(polishFormulaString);
    let majorOperator = polishFormulaString
      .charAt(majorOperatorIndex)
      .concat(Character.SEPARATORCHARACTER);

    let leftFormula = updatePolishText(
      polishFormulaString.slice(0, majorOperatorIndex)
    ).concat(Character.SEPARATORCHARACTER);
    let rightFormula = updatePolishText(
      polishFormulaString.slice(majorOperatorIndex + 1)
    ).concat(Character.SEPARATORCHARACTER);

    polishFormulaString = majorOperator
      .concat(leftFormula)
      .concat(rightFormula);

    return polishFormulaString.trim();
  }
}
