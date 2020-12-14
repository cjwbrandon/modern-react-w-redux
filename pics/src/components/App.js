import React from "react";
import SearchBar from "./SearchBar";

// Communicating Child to Parent -> Class Components
class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    // Note onSubmit on our Components is different from onSubmit on a normal JSX Element
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
