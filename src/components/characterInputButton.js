import React from "react";
import { connect } from "react-redux";
import { CHARACTERINPUT } from "../actions/actionNames.js";

class CharacterInputButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeypress = this.handleKeypress.bind(this);
  }

  handleKeypress(event) {
    if (event.keyCode == this.props.charCode) {
      event.preventDefault();
      this.props.updateInfix();
    }
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeypress);
  }

  render() {
    return (
      <div className="characterInputButtonDiv">
        <button
          id={this.props.buttonID}
          className="characterInputButton"
          onClick={this.props.updateInfix}
        >
          {this.props.character}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateInfix: () =>
    dispatch({
      type: CHARACTERINPUT,
      character: ownProps.character
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterInputButton);
