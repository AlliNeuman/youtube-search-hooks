import "./VideoDetail.css";
import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  } else {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="ui segment video-detail">
          <div className="ui embed">
            <iframe src={videoSrc} title={video.snippet.title} />
          </div>
          <div className="content">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
