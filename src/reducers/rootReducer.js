import { initialState } from "../store.js";
import * as Actions from "../actions/actionNames";
import updateInfixText from "../resources/updateInfixText.js";
import isFormulaComplete from "../resources/isFormulaComplete.js";
import updatePolishText from "../resources/updatePolishText.js";
import updateHelp from "../resources/updateHelp.js";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHARACTERINPUT:
      let updatedInfixString = updateInfixText(state, action);
      let polishString = isFormulaComplete(updatedInfixString)
        ? updatePolishText(updatedInfixString)
        : state.polishText;

      return {
        ...state,
        infixText: updatedInfixString,
        polishText: polishString,
        resultText: initialState.resultText,
        isNoteExpanded: state.isNoteExpanded
      };
    case Actions.PERFORMFUNCTION:
      return action.function(state);
    case Actions.HELP:
      return updateHelp(state);
    default:
      return state;
  }
};

export default rootReducer;
