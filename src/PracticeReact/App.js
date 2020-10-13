import React from 'react';
import Search from './Search';
import youtube from './YoutubeAPI';
import ListOfVideos from './List';

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
                videosArray: result.data.items
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    selectVideo = (video) => {
        this.setState({
            selectedVideo: video
        });
    }

    render() {
        return(
            <div>
                <Search onSubmit={this.onSubmit} />
                <ListOfVideos videos={this.state.videosArray} selectVideo={this.selectVideo} />
            </div>
        );
    }
}

export default App;