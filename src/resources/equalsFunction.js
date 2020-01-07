import performPEMDAS from "./performPEMDAS.js";
import cleanMisplacedOperators from "./cleanMisplacedOperators.js";

export default function equalsFunction(state) {
  let resultString = performPEMDAS(
    cleanMisplacedOperators(JSON.parse(JSON.stringify(state.infixText)))
  );

  return {
    ...state,
    infixText: state.infixText,
    polishText: state.polishText,
    resultText: resultString
  };
}
