import React from "react";
import { connect } from "react-redux";

import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {
  // Important rule: each components need to be able to work in isolation -> fetch your own data
  // Note: On reload, streams is undefined at first and populated after navigating
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    // console.log(this.props);
    if (!this.props.stream) return <div>Loading...</div>;

    return <div>{this.props.stream.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // Note: match.params -> keys are :{key} in the URL
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
