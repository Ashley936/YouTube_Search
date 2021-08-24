import React from "react";

const VideoDeatail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
    }
    const src = `http://www.youtube.com/embed/${video.id.videoId}`
    return (
      <div>
        <div className="ui embed">
          <iframe src={src} title={video.snippet.title}></iframe>
        </div>
        <div className="ui raised segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
};

export default VideoDeatail;
