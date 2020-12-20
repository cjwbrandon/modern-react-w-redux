import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// Connect react-redux
// Note: Reruns each time we change the state
const mapStateToProps = (state) => {
  // console.log(state);

  // return an object which will be reference as this.props in the component
  return { songs: state.songs };
};
// connect({mapStateToProps}, {{actionCreators}})({component})
export default connect(mapStateToProps, { selectSong })(SongList);
