import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

const SongsList = ({ songs, selectSong }) => {
    
    const render = songs.map((song) => {
        return <div key={song.name}> {song.name} <button onClick={() => selectSong(song)}>Select</button></div>
    })  

    return(
        <div>
            {render}
        </div>
    );
}

const mapStateToProps = (state) => {
    return({
        songs: state.songs
    })
}

export default connect(mapStateToProps, {selectSong})(SongsList);