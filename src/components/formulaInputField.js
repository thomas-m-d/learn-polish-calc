import React from "react";
import { connect } from "react-redux";

class FormulaInputField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="formulaInputField">
        <p id={this.props.inputID}>{this.props.text}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (ownProps.type == "infix")
    return {
      text: state.infixText
    };
  else if (ownProps.type == "polish")
    return {
      text: state.polishText
    };
  else return {};
};

const mapDispatchToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FormulaInputField);
