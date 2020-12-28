import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        {/* Must be 'value' -> parse value to put in the Context Object */}
        {/* Can have nested Providers for each context -> order does not matter */}
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>

        {/* Shows separate pipe/channel that Context.Provider creates */}
        {/* <LanguageContext.Provider value="dutch">
          <UserCreate />
        </LanguageContext.Provider> */}

        {/* Always get the default value only and never from the provider */}
        {/* <UserCreate /> */}
      </div>
    );
  }
}

export default App;
