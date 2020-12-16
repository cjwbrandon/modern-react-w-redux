import axios from "axios";

// You can set up preconfigured property clients using Axios
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID bLeNcZm4sbWSvNfxkFxNmI5DtcqHWqcV75nL4usdtFE",
  },
});
