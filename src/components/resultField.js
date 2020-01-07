import React from "react";
import { connect } from "react-redux";

class ResultField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="resultField">
        <p id={this.props.pID}>{this.props.text}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.resultText
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ResultField);
