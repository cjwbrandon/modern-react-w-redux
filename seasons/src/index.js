import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

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
  // constructor(props) {
  //   super(props);

  //   // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT
  //   // Initialise state -> must be this.state
  //   this.state = { lat: null, errorMessage: "" };

  //   // We can do data loading in constructor but best practice to move it to componentDidMount
  //   // window.navigator.geolocation.getCurrentPosition(
  //   //   (position) => {
  //   //     // We called setState -> part of React.Component
  //   //     // .setState({{changesObject}})
  //   //     this.setState({ lat: position.coords.latitude });

  //   //     // Do not directly manipulate
  //   //     // this.state.lat = position.coords.latitude;
  //   //   },
  //   //   // Error Handling
  //   //   (err) => {
  //   //     this.setState({ errorMessage: err.message });
  //   //   }
  //   // );
  // }

  // Alternative State Initialisation -> do not need constructor anymore
  state = { lat: null, errorMessage: "" };

  // Do data loading in componentDidMount
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component was just updated it rerendered!");
  }

  // Place conditional logic in a helper function
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      // SeasonDisplay gets rerendered as well -> parent state change -> child rerenders
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  // React says we have to define render!! Required
  render() {
    // Note: Called frequently -> Try not to do work in the render method
    // window.navigator.geolocation.getCurrentPosition(
    //   (position) => (this.lat = position.coords.latitude),
    //   (err) => console.log(err)
    // );
    // Conditional Rendering -> Simplest way
    // Avoid Conditionals in Render -> difficult to make changes in the future.
    // if (this.state.errorMessage && !this.state.lat) {
    //   return <div>Error: {this.state.errorMessage}</div>;
    // }
    // if (!this.state.errorMessage && this.state.lat) {
    //   // SeasonDisplay gets rerendered as well -> parent state change -> child rerenders
    //   return <SeasonDisplay lat={this.state.lat} />;
    // }
    // return <Spinner message="Please accept location request" />;

    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
