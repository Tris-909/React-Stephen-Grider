import {combineReducers} from 'redux';

const fetchPostsReducers = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return [...state, action.payload]  
        default: 
            return state;
    }
}

const fetchUsersReducers = (state =  [], action) => {
    switch(action.type) {
        case 'FETCH_USERS_SUCCESSFULLY': 
            return [...state, action.payload]
        default: 
            return state;
    }
}

export default combineReducers({
    posts: fetchPostsReducers,
    users: fetchUsersReducers
});