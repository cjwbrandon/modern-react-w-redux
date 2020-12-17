import axios from "axios";

const KEY = "AIzaSyC2JVHlAGRm9yCG9u9cT9ALuXqNdLkBm6M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
