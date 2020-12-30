import React, { useEffect, useRef, useCallback } from "react";
import flv from "flv.js";
import { connect } from "react-redux";

import { fetchStream } from "../../actions";

const StreamShow = (props) => {
  const videoRef = useRef();
  const player = useRef();
  const { fetchStream } = props;

  const memoizedBuildPlayer = useCallback(() => {
    if (player.current || !props.stream) return;

    const id = props.match.params.id;

    player.current = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    player.current.attachMediaElement(videoRef.current);
    player.current.load();
  }, [props.stream, props.match.params.id]);

  useEffect(() => {
    const id = props.match.params.id;
    console.log(id);

    fetchStream(id);
    memoizedBuildPlayer();

    return () => player.current?.destroy();
  }, [fetchStream, props.match.params.id, memoizedBuildPlayer]);

  if (!props.stream) return <div>Loading...</div>;

  const { title, description } = props.stream;

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls />
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
};

export default connect(null, { fetchStream })(StreamShow);
