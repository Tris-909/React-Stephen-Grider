import axios from 'axios';

export const fetchPostsThunk = () => {
    return async function(dispatch) {
        dispatch({
            type: 'FETCH_POSTS'
        });
        axios.get('http://jsonplaceholder.typicode.com/posts').then((response) => {
            dispatch({
                type: 'FETCH_POSTS_SUCCESS',
                payload: response
            });
        }).catch((error) => {
            dispatch({
                type: 'FETCH_POST_FAILED',
                payload: error
            });
        });
    }
}

export const fetchUsersThunk = () => {
    return async function(dispatch) {
        dispatch({
            type: 'FETCH_USERS'
        });
        axios.get('http://jsonplaceholder.typicode.com/users').then((response) => {
            dispatch({
                type: 'FETCH_USERS_SUCCESSFULLY',
                payload: response
            });
        }).catch((error) => {
            dispatch({
                type: 'FETCH_USERS_FAILED',
                payload: error
            })
        })
    }
}
