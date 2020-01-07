import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { buttonTextShow, helpTextHidden } from "./resources/updateHelp.js";

export const initialState = {
  infixText: "0",
  polishText: "0",
  resultText: "",
  isHelpShown: false,
  helpButtonText: buttonTextShow,
  helpText: helpTextHidden
};

const Store = createStore(rootReducer);
export default Store;
