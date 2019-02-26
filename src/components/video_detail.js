import React from 'react';
import '../style/style.css'

const VideoDetail = ({video}) => {
    if(!video){
        return<div>Loading...</div>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail" >
            <div className="embed-responsive embed-responsive-16by9" >
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoDetail;