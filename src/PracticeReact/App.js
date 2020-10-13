import React from 'react';
import axios from 'axios';
import Search from './Search';
import youtube from './YoutubeAPI';

class App extends React.Component {

    onSubmit = (term) => {
        console.log(term);

        youtube.get('/search', {
            params: {
                q: term
            }
        })
    }

    render() {
        return(
            <div>
                <Search onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default App;