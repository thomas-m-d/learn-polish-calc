import * as RegEx from "./regularExpression.js";
import * as Character from "./buttonCharacters.js";

export default function isFormulaComplete(infixFormulaString) {
  let parenCount = 0;

  for (let i = 0; i < infixFormulaString.length; i++) {
    if (infixFormulaString.charAt(i) == Character.LEFTPARENCHARACTER)
      parenCount++;
    else if (infixFormulaString.charAt(i) == Character.RIGHTPARENCHARACTER)
      parenCount--;
  }

  if (
    parenCount != 0 ||
    RegEx.operatorNegativeDecimal.test(
      infixFormulaString.charAt(infixFormulaString.length - 1)
    )
  )
    return false;
  else return true;
}
