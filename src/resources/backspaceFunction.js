import { initialState } from "../store.js";
import updatePolishText from "./updatePolishText.js";
import isFormulaComplete from "./isFormulaComplete.js";

export default function backspaceFunction(state) {
  let infixString = "";
  if (state.infixText.length == 1) infixString = initialState.infixText;
  else
    infixString = JSON.parse(JSON.stringify(state.infixText)).slice(
      0,
      state.infixText.length - 1
    );

  let polishString = "";
  if (isFormulaComplete(infixString)) {
    polishString = updatePolishText(infixString);
  } else polishString = state.polishText;

  return {
    ...state,
    infixText: infixString,
    polishText: polishString,
    resultText: initialState.resultText
  };
}
