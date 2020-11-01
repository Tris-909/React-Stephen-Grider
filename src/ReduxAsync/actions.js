import axios from 'axios';

export const fetchPostsThunk = () => {
    return async function(dispatch) {
        axios.get('http://jsonplaceholder.typicode.com/posts').then((response) => {
            dispatch({
                type: 'FETCH_POSTS_SUCCESS',
                payload: response.data
            });
        }).catch((error) => {
            console.log(error);
        });
    }
}

export const fetchUsersThunk = (userId) => {
    return async function(dispatch) {
        axios.get(`http://jsonplaceholder.typicode.com/users/${userId}`).then((response) => {
            dispatch({
                type: 'FETCH_USERS_SUCCESSFULLY',
                payload: response.data
            });
        }).catch((error) => {
            console.log(error);
        })
    }
}