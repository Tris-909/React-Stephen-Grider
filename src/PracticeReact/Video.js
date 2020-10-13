import React from 'react';

const VideoPlayer = (props) => {
        let result, description, videoSrc;
        if (props.selectedVideo) {
            console.log();

            result = (
                props.selectedVideo.snippet.title
            );
            description = (
                props.selectedVideo.snippet.description
            );
            
            videoSrc=`https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`; 

        return(
            <div>
                <div className="ui embed">
                    <iframe src={videoSrc} title={result} allowfullscreen frameborder="0" 
                    webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen/>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{result}</h4>
                    <p>{description}</p>
                </div>
            </div>
        );
        
        } else {
            return null;
        }
}

export default VideoPlayer;