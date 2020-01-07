import React from "react";
import { connect } from "react-redux";
import { HELP } from "../actions/actionNames.js";

class TitleAndHelp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="titleAndHelpInnerDiv">
        <div className="titleAndHelpFlexBox">
          <h1 className="title">Learn Polish</h1>
          <div className="helpButtonDiv">
            <button className="helpButton" onClick={this.props.updateHelp}>
              {this.props.buttonText}
            </button>
          </div>
        </div>
        <p className="help">{this.props.helpText}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  buttonText: state.helpButtonText,
  helpText: state.helpText
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateHelp: () =>
    dispatch({
      type: HELP
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleAndHelp);
