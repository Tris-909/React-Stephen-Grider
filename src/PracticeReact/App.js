import React from 'react';
import Search from './Search';
import youtube from './YoutubeAPI';
import ListOfVideos from './List';
import VideoPlayer from './Video';

class App extends React.Component {
    state = {
        videosArray: [],
        selectedVideo: null
    }

    onSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        }).then((result) => {
            console.log(result);
            this.setState({
                videosArray: result.data.items,
                selectedVideo: result.data.items[0]
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    selectVideo = (video) => {
        console.log(video);
        this.setState({
            selectedVideo: video
        });
    }

    render() {
        return(
            <div className="ui container">
                <Search onSubmit={this.onSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoPlayer selectedVideo={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <ListOfVideos videos={this.state.videosArray} selectVideo={this.selectVideo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;