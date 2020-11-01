import React from 'react';
import SongsList from './Components/SongsList';
import SongDetail from './Components/SongDetail';

const App = () => {
    return(
        <div>
            <SongsList />
            <SongDetail />
        </div>
    );
}

export default App;