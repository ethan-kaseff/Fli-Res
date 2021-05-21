import { remove } from 'js-cookie';
import {csrfFetch} from './csrf';

const SET_USER = '/api/set-user';
const REMOVE_USER = '/api/remove-user'

// Action Creators
const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

// Thunk Action Creators
// Log in
export const login = (user) => async dispatch => {
    const { credential, password } = user;
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
} 

// Sign Up
export const signup = (user) => async dispatch => {
    const { 
        username,
        email,
        password
    } = user;

    const response = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            username,
            email,
            password
        }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
}

// Log Out
export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE'
    })
    dispatch(removeUser());
    return response;
}

export const restoreUser = (user) => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
}

// Reducer 
const initialState  = { user: null }

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;