import {combineReducers} from 'redux';

const initialPostsState = {
    posts: [],
    isLoading: false,
    error: null
}

const fetchPostsReducers = (state = initialPostsState, action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCH_POSTS_SUCCESS':
            return {
                ...state,
                posts: action.payload,
                isLoading: false
            }
        case 'FETCH_POST_FAILED':
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default: 
            return state;
    }
}

const initialUsersState = {
    users: [],
    isLoading: false,
    error: null
}

const fetchUsersReducers = (state = initialUsersState, action) => {
    switch(action.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCH_USERS_SUCCESSFULLY': 
            return {
                ...state,
                isLoading: false,
                users: action.payload
            }
        case 'FETCH_USERS_FAILED':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

export default combineReducers({
    posts: fetchPostsReducers,
    users: fetchUsersReducers
});