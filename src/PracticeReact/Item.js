import React from 'react';
import './Item.css';

const Video = (props) => {  
    return(
        <div className="video-item item" onClick={() => props.SelectAVideo(props.video)}>
            <img className="ui image" src={props.video.snippet.thumbnails.medium.url} alt="youtube"/>
          <div className="content">
            <div className="header">{props.video.snippet.title}</div>
          </div>
        </div>
    );
}

export default Video;