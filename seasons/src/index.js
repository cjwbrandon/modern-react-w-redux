import React from "react";
import ReactDOM from "react-dom";

// Functional Component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );

//   return <div>Hi There!</div>;
// };

// Class Based Component
class App extends React.Component {
  // Specific to JS and not React
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT
    // Initialise state -> must be this.state
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We called setState -> part of React.Component
        // .setState({{changesObject}})
        this.setState({ lat: position.coords.latitude });

        // Do not directly manipulate
        // this.state.lat = position.coords.latitude;
      },
      // Error Handling
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // React says we have to define render!! Required
  render() {
    // Note: Called frequently -> Try not to do work in the render method
    // window.navigator.geolocation.getCurrentPosition(
    //   (position) => (this.lat = position.coords.latitude),
    //   (err) => console.log(err)
    // );

    // Conditional Rendering -> Simplest way
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
