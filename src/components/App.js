import React from "react";
import youtube from "../apis/youtube.js";
import VideoList from "./VideoList.js";

// import axios from "axios";
// const KEY = "AIzaSyCLlO3WtgA0Yfl24chDEn8PEu41musEaOk";
// channel url = "UCj8XvQLPxMey8LRa3mzE_1g";

class App extends React.Component {
  state = { videos: [] };

  componentDidMount = async () => {
    const response = await youtube.get("/search", {
      params: {
        channelId: "UCj8XvQLPxMey8LRa3mzE_1g",
        type: "video",
        maxResults: 10,
        part: "snippet",
        order: "date",
        key: "AIzaSyCLlO3WtgA0Yfl24chDEn8PEu41musEaOk"
      }
    });

    console.log(response);
  };

  render() {
    return (
      <div>
        <h1>This is my App</h1>
        <VideoList />
      </div>
    );
  }
}
export default App;
