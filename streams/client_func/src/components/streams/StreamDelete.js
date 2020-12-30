import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import history from "../../history";
import Modal from "../Modal";
import { fetchStream, deleteStream } from "../../actions";

const renderActions = (props) => {
  const { id } = props.match.params;

  return (
    <React.Fragment>
      <button onClick={() => props.deleteStream(id)}>Delete</button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );
};

const renderContent = (props) => {
  return props.stream
    ? `Are you sure you want to delete the stream with title: ${props.stream.title}`
    : "Are you sure you want to delete this stream?";
};

const StreamDelete = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  return (
    <Modal
      title="Delete Stream"
      content={renderContent(props)}
      actions={renderActions(props)}
      onDismiss={() => history.pushState("/")}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
