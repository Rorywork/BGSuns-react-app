import React from "react";
import youtube from "../apis/youtube.js";

// import axios from "axios";
// const KEY = "AIzaSyCLlO3WtgA0Yfl24chDEn8PEu41musEaOk";
// channel url = "UCj8XvQLPxMey8LRa3mzE_1g";

class App extends React.Component {
  state = { videos: [] };

  //   getRequest = async term => {
  //     const response = await youtube.get("/search", {
  //       params: {
  //         q: term
  //       }
  //     });

  //     this.setState({ videos: response.data.items });
  //   };

  getRequest = () => {
    const response = youtube.get("/search", {
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
        <button onClick={this.getRequest}>API Call</button>
      </div>
    );
  }
}
export default App;
