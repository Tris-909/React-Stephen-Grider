import React, {useState} from 'react';
import Search from './Search';
import youtube from './YoutubeAPI';
import ListOfVideos from './List';
import VideoPlayer from './Video';

const App = () => {
    const [videosArray, setVideosArray] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        }).then((result) => {
            setVideosArray(result.data.items);
            setSelectedVideo(result.data.items[0]);
        }).catch((error) => {
            console.log(error);
        });
    }

    const selectVideo = (video) => {
        setSelectedVideo(video);
    }

    return(
        <div className="ui container">
            <Search onSubmit={onSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoPlayer selectedVideo={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <ListOfVideos videos={videosArray} selectVideo={selectVideo} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;