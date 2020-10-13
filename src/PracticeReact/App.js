import React from 'react';
import axios from 'axios';
import Search from './Search';

class App extends React.Component {

    onSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
    }

    render() {
        return(
            <div>
                <Search onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default App;