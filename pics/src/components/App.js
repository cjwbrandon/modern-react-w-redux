import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

// Communicating Child to Parent -> Class Components
class App extends React.Component {
  state = { images: [] };

  // 1 way: Handling requests using async await
  onSearchSubmit = async (term) => {
    // console.log(term);
    // API request -> axios.get({url}, {options})
    // Configurations on Axios can be placed in a separate file
    // const response = await axios.get("https://api.unsplash.com/search/photos", {
    //   params: { query: term },
    //   headers: {
    //     Authorization: "Client-ID bLeNcZm4sbWSvNfxkFxNmI5DtcqHWqcV75nL4usdtFE",
    //   },
    // });
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // console.log(response);

    // Another way: Handling Requests using .then
    // .then((response) => {
    //   console.log(response);
    // });
    this.setState({ images: response.data.results });
  };

  render() {
    // Note onSubmit on our Components is different from onSubmit on a normal JSX Element
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
