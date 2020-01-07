import React from "react";
import { connect } from "react-redux";
import { PERFORMFUNCTION } from "../actions/actionNames.js";

class PerformFunctionButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyEvent = this.handleKeyEvent.bind(this);
  }

  handleKeyEvent(event) {
    if (this.props.charCodes.includes(event.keyCode))
      this.props.performFunction();
  }

  componentDidMount() {
    document.addEventListener(this.props.keyEvent, this.handleKeyEvent);
  }

  componentWillUnmount() {
    document.removeEventListener(this.props.keyEvent, this.handleKeyEvent);
  }

  render() {
    return (
      <div className="performFunctionButtonDiv">
        <button
          id={this.props.buttonID}
          className="performFunctionButton"
          onClick={this.props.performFunction}
        >
          {this.props.character}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  performFunction: () =>
    dispatch({
      type: PERFORMFUNCTION,
      function: ownProps.function
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PerformFunctionButton);
