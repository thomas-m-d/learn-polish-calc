import React from "react";
import "./App.scss";
import CharacterInputButton from "./components/characterInputButton.js";
import PerformFunctionButton from "./components/performFunctionButton.js";
import FormulaInputField from "./components/formulaInputField.js";
import ResultField from "./components/resultField.js";
import TitleAndHelp from "./components/titleAndHelp.js";
import backspaceFunction from "./resources/backspaceFunction.js";
import clearFunction from "./resources/clearFunction.js";
import equalsFunction from "./resources/equalsFunction.js";
import * as Character from "./resources/buttonCharacters.js";

function App() {
  return (
    <div className="App">
      <div id="calcGrid">
        <div id="titleAndHelpDiv">
          <TitleAndHelp />
        </div>
        <div id="infixInputDiv" className="formulaInput">
          <FormulaInputField inputID="infixInput" type="infix" />
        </div>

        <div id="polishInputDiv" className="formulaInput">
          <FormulaInputField inputID="polishInput" type="polish" />
        </div>

        <div id="resultFieldDiv">
          <ResultField pID="resultP" />
        </div>

        <div id="zeroDiv" className="numberButton">
          <CharacterInputButton
            buttonID="zero"
            character={Character.ZEROCHARACTER}
            charCode={Character.ZEROCHARCODE}
          />
        </div>

        <div id="oneDiv" className="numberButton">
          <CharacterInputButton
            buttonID="one"
            character={Character.ONECHARACTER}
            charCode={Character.ONECHARCODE}
          />
        </div>

        <div id="twoDiv" className="numberButton">
          <CharacterInputButton
            buttonID="two"
            character={Character.TWOCHARACTER}
            charCode={Character.TWOCHARCODE}
          />
        </div>

        <div id="threeDiv" className="numberButton">
          <CharacterInputButton
            buttonID="three"
            character={Character.THREECHARACTER}
            charCode={Character.THREECHARCODE}
          />
        </div>

        <div id="fourDiv" className="numberButton">
          <CharacterInputButton
            buttonID="four"
            character={Character.FOURCHARACTER}
            charCode={Character.FOURCHARCODE}
          />
        </div>

        <div id="fiveDiv" className="numberButton">
          <CharacterInputButton
            buttonID="five"
            character={Character.FIVECHARACTER}
            charCode={Character.FIVECHARCODE}
          />
        </div>

        <div id="sixDiv" className="numberButton">
          <CharacterInputButton
            buttonID="six"
            character={Character.SIXCHARACTER}
            charCode={Character.SIXCHARCODE}
          />
        </div>

        <div id="sevenDiv" className="numberButton">
          <CharacterInputButton
            buttonID="seven"
            character={Character.SEVENCHARACTER}
            charCode={Character.SEVENCHARCODE}
          />
        </div>

        <div id="eightDiv" className="numberButton">
          <CharacterInputButton
            buttonID="eight"
            character={Character.EIGHTCHARACTER}
            charCode={Character.EIGHTCHARCODE}
          />
        </div>

        <div id="nineDiv" className="numberButton">
          <CharacterInputButton
            buttonID="nine"
            character={Character.NINECHARACTER}
            charCode={Character.NINECHARCODE}
          />
        </div>

        <div id="decimalDiv" className="numberButton">
          <CharacterInputButton
            buttonID="decimal"
            character={Character.DECIMALCHARACTER}
            charCode={Character.DECIMALCHARCODE}
          />
        </div>

        <div id="addDiv" className="operatorButton">
          <CharacterInputButton
            buttonID="add"
            character={Character.ADDCHARACTER}
            charCode={Character.ADDCHARCODE}
          />
        </div>

        <div id="subtractDiv" className="operatorButton">
          <CharacterInputButton
            buttonID="subtract"
            character={Character.SUBTRACTCHARACTER}
            charCode={Character.SUBTRACTCHARCODE}
          />
        </div>

        <div id="multiplyDiv" className="operatorButton">
          <CharacterInputButton
            buttonID="multiply"
            character={Character.MULTIPLYCHARACTER}
            charCode={Character.MULTIPLYCHARCODE}
          />
        </div>

        <div id="divideDiv" className="operatorButton">
          <CharacterInputButton
            buttonID="divide"
            character={Character.DIVIDECHARACTER}
            charCode={Character.DIVIDECHARCODE}
          />
        </div>

        <div id="exponentDiv" className="operatorButton">
          <CharacterInputButton
            buttonID="exponent"
            character={Character.EXPONENTCHARACTER}
            charCode={Character.EXPONENTCHARCODE}
          />
        </div>

        <div id="negativeDiv" className="operatorButton">
          <CharacterInputButton
            buttonID="negative"
            character={Character.NEGATIVECHARACTER}
            charCode={Character.NEGATIVECHARCODE}
          />
        </div>

        <div id="leftParenDiv" className="parenButton">
          <CharacterInputButton
            buttonID="leftParen"
            character={Character.LEFTPARENCHARACTER}
            charCode={Character.LEFTPARENCHARCODE}
          />
        </div>

        <div id="rightParenDiv" className="parenButton">
          <CharacterInputButton
            buttonID="rightParen"
            character={Character.RIGHTPARENCHARACTER}
            charCode={Character.RIGHTPARENCHARCODE}
          />
        </div>

        <div id="backspaceDiv" class="functionButton">
          <PerformFunctionButton
            buttonID="backspace"
            character={Character.BACKSPACECHARACTER}
            charCodes={Character.BACKSPACECHARCODES}
            keyEvent={Character.BACKSPACEKEYEVENT}
            function={backspaceFunction}
          />
        </div>

        <div id="clearDiv" class="functionButton">
          <PerformFunctionButton
            buttonID="clear"
            character={Character.CLEARCHARACTER}
            charCodes={Character.CLEARCHARCODES}
            keyEvent={Character.CLEARKEYEVENT}
            function={clearFunction}
          />
        </div>

        <div id="equalsDiv" class="functionButton">
          <PerformFunctionButton
            buttonID="equals"
            character={Character.EQUALSCHARACTER}
            charCodes={Character.EQUALSCHARCODES}
            keyEvent={Character.EQUALSKEYEVENT}
            function={equalsFunction}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
