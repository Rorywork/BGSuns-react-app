import "./App.css";
import React from "react";
import youtube from "../apis/youtube.js";
import VideoList from "./VideoList.js";
import VideoDetail from "./VideoDetail";

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

    this.setState({ videos: response.data.items });
    console.log(this.state.videos[0].id.videoId);
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container app-container">
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
