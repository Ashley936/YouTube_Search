import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="ui raised segment item" id="video-card">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        onClick={() => onVideoSelect(video)}
      />
      <div className="content">
        <div className="header" onClick={() => onVideoSelect(video)}>
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
