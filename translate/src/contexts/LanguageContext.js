import React from "react";

// Create Context -> React.createContext({defaultValue})
// Note: defaultValue can be any valid JS type -> e.g. string, object, list,
// Why Capital 'C'? Creating components and rendering out of JSX has to be defined with a capital letter.
const Context = React.createContext("english");

// Take a look at the Context Object to view the properties and methods available
// e.g. Consumer and Provider used to input and output values
// console.log(context);

export class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  // Setup Language Context Provider
  // Pass of language and onLanguageChange callback
  // Share with other components
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
