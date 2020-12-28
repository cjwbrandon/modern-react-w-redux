import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  // state = { language: "english" };

  // onLanguageChange = (language) => {
  //   this.setState({ language });
  // };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          {/* <LanguageSelector onLanguageChange={this.onLanguageChange} /> */}
          <LanguageSelector />

          {/* Must be 'value' -> parse value to put in the Context Object */}
          {/* Can have nested Providers for each context -> order does not matter */}
          <ColorContext.Provider value="red">
            <UserCreate />
            {/* <LanguageContext.Provider value={this.state.language}>
              <UserCreate />
            </LanguageContext.Provider> */}
          </ColorContext.Provider>

          {/* Shows separate pipe/channel that Context.Provider creates */}
          {/* <LanguageContext.Provider value="dutch">
            <UserCreate />
          </LanguageContext.Provider> */}

          {/* Always get the default value only and never from the provider */}
          {/* <UserCreate /> */}
        </LanguageStore>
      </div>
    );
  }
}

export default App;
