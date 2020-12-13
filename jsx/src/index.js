// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
// function getButtonText() {
//   return "Click on me!";
// }

// Function-based component
const App = function () {
  // Valid values
  // const buttonText = "Click me";
  // const buttonText = 12345;
  // const buttonText = ["Hi", "There"];
  // const buttonText = [10, 20];

  // Invalid values
  const buttonText = { text: "Click me" };
  const labelText = "Enter name:";

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
