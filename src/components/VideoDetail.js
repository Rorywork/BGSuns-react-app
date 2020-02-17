import "./VideoDetail.css";
import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="select-video-screen">
        <div className="select-video-text">
          <h4>Welcome to the BG Suns Video Player</h4>
          <p>Please select one of our videos.</p>
          <img
            alt="BG Suns Logo"
            src="https://pbs.twimg.com/profile_images/1043219357634121728/HsEaxUdH_400x400.jpg"
            height="100px"
          ></img>
        </div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="iFrame" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
