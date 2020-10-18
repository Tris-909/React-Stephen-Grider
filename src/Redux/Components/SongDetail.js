import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) => {
    return(
        <div>
            Song Detail : 
            <h1>{props.selectedSong ? props.selectedSong.name : null}</h1>
            <h3>{props.selectedSong ? props.selectedSong.duration : null}</h3>
        </div>
    );
}

const mapStateToProps = (state) => {
    return({
        selectedSong: state.selectedSong
    })
}

export default connect(mapStateToProps)(SongDetail);