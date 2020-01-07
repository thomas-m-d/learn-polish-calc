import { initialState } from "../store.js";

export default function clearFunction(state) {
  return {
    ...state,
    infixText: initialState.infixText,
    polishText: initialState.polishText,
    resultText: initialState.resultText
  };
}
