import React from "react";
import youtube from "../apis/youtube.js";
import VideoList from "./VideoList.js";
import VideoDetail from "./VideoDetail";

// import axios from "axios";
// const KEY = "AIzaSyCLlO3WtgA0Yfl24chDEn8PEu41musEaOk";
// channel url = "UCj8XvQLPxMey8LRa3mzE_1g";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

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
    this.setState({ videos: response.data.items });
    console.log(this.state.videos);
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
export default App;
