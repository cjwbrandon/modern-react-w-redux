import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import LangaugeContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // Set up context object -> must be called 'contextType'
  static contextType = LanguageContext;
  // Equivalent syntax
  // Button.contextType = LanguageContext;

  render() {
    console.log(this.context);
    return <button className="ui button primary">Submit</button>;
  }
}

export default Button;
