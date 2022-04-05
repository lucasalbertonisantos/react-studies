import React from "react";
import VideoItem from "./VIdeoItem";

const VideoList = ({ videos, onVideoSelect }) => {
    const videoItemList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    });
    return <div className="ui relaxed divided list">{videoItemList}</div>
}

export default VideoList;