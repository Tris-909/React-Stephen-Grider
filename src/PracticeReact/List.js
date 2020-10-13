import React from 'react';
import Video from './Item';

const ListOfVideos = ({videos, selectVideo}) => {

    let renderList = videos.length > 0 ? (
        videos.map((video) => {
            return <Video SelectAVideo={selectVideo} key={video.id.videoId} video={video} />
        })
    ) : null;

    return(
        <div className="ui relaxed divided list">
            {renderList}
        </div>
    );
} 

export default ListOfVideos;