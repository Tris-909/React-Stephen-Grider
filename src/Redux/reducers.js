import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            name: 'Song 1',
            duration: '4:14'
        },
        {
            name: 'Song 2',
            duration: '3:13'
        },
        {
            name: 'Song 3',
            duration: '2:12'
        }
    ];
}

const selectSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer
});