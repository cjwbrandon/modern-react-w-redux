import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // Call function whenever a change -> Add reference to JSX
  // Uncontrolled Element
  // onInputChange(event) {
  //   // Input
  //   // console.log(event.target.value);
  // }

  // Solution to this: Transform to arrow function
  onFormSubmit = (event) => {
    event.preventDefault();

    // console.log(this.state.term); // Error
    this.props.onSubmit(this.state.term);
  };

  render() {
    // Alternate Event Handler Syntax -> Placing a arrow function directly

    // Uncontrolled Element
    // <input type="text" onChange={(e) => console.log(e.target.value)} />

    // Controlled Element -> Using state -> Much easier to transform stuff

    // Solution to this: <form onSubmit={ (e) => this.onFormSubmit(e) } className="ui form">
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
