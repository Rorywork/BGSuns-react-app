import axios from "axios";

const KEY = "AIzaSyCLlO3WtgA0Yfl24chDEn8PEu41musEaOk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    channelId: "UCj8XvQLPxMey8LRa3mzE_1g",
    type: "video",
    maxResults: 10,
    part: "snippet",
    order: "date",
    key: KEY
  }
});
