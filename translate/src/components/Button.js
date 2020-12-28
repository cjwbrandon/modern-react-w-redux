import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // Set up context object -> must be called 'contextType'
  // static contextType = LanguageContext;
  // Equivalent syntax
  // Button.contextType = LanguageContext;

  render() {
    // console.log(this.context);
    // const text = this.context === "english" ? "Submit" : "Voorleggen";
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            {/* Provide a function as a child -> Consumer parses the value of the context to the function and invokes it whenever it renders */}
            <LanguageContext.Consumer>
              {(value) => (value === "english" ? "Submit" : "Voorleggen")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
