import { combineReducers } from 'redux';

const initialState = {
    isSignedIn: null,
    userId: null
}

const GoogleAuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload
            }
        case 'SIGN_OUT':
            return {
                ...state,
                isSignedIn: false
            }
        default:
            return state;
    }
}

export default combineReducers({
    GoogleAuth: GoogleAuthReducer
});