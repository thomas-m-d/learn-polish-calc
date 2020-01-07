import React from "react";

const regularStyle = {
  textAlign: "justify",
  margin: "0 0 .35em 0"
};
const ulHeadingStyle = {
  textAlign: "justify",
  marginBottom: ".25em",
  fontWeight: "bold"
};
const ulStyle = {
  textAlign: "justify",
  paddingLeft: "1em",
  marginTop: "0"
};
const liStyle = {
  margin: "0 0 .35em 0"
};

export const buttonTextShow = "Show Help";
export const buttonTextHide = "Hide Help";
export const helpTextHidden = "";
export const helpTextShown = (
  <div>
    <p style={regularStyle}>
      Polish Notation (also known as Prefix Notation) is a set of conventions
      for writing mathematical formulae where the operators precede the numbers
      (or other mathematical objects) that they operate upon. Also, when every
      operator is unambiguous, Polish Notation allows one to represent formulae
      unambiguously without needing parentheses.
    </p>
    <p style={regularStyle}>
      This calculator is intended to help the user learn the basics of Polish
      Notation. Either by clicking the in-app buttons or by typing the
      corresponding keys on their keyboard, the user can enter arithmetic
      formulae into the top line of the calculator using the more familiar Infix
      Notation that other calculators use (where operators occur between the
      numbers they operate upon). The middle line will automatically display the
      same formulae formatted in Polish Notation. When a formula is evaluated,
      the result will appear in the bottom line of the calculator.
    </p>
    <p style={regularStyle}>
      There are two primary advantages to learning Polish Notation, one
      practical and one aesthetic. First, Polish Notation is used in certain
      programming languages (with LISP as one of the more notable), so to learn
      these languages one needs a familiarity with Polish Notation. Second, and
      more importantly, is the mathematical elegance that comes with no longer
      needing parentheses.
    </p>
    <p style={ulHeadingStyle}>Usage Notes:</p>
    <ul style={ulStyle}>
      <li style={liStyle}>
        Unlike most calculators, which use the symbol '-' ambiguously to
        represent both subtraction (i.e. 1-1) and negation (i.e. -1), this
        calculator uses '-' to represent only subtraction. '~' is used to
        represent negation. This is to ensure no parentheses are needed in this
        calculator's use of Polish Notion.
      </li>
      <li style={liStyle}>
        The 'BS' button deletes the final character in the top-most line of the
        calculator. It can be triggered by typing the Backspace key.
      </li>
      <li style={liStyle}>
        The 'C' button clears all characters from the calculator. It can be
        triggered by typing the Delete key.
      </li>
      <li style={liStyle}>
        The '=' button can be triggered by typing the Equals Sign key or the
        Enter key.
      </li>
    </ul>
  </div>
);

export default function updateManual(state) {
  if (state.isHelpShown) {
    console.log("in if");
    return {
      ...state,
      isHelpShown: false,
      helpButtonText: buttonTextShow,
      helpText: helpTextHidden
    };
  } else {
    console.log("in else");
    return {
      ...state,
      isHelpShown: true,
      helpButtonText: buttonTextHide,
      helpText: helpTextShown
    };
  }
}
