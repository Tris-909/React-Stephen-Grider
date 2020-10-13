import axios from 'axios';
const KEY = 'AIzaSyBFW7VX9i9lsAG3DSSMcATx28631TlAMTE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 20,
        key: KEY,
        type: 'video'
    }
});