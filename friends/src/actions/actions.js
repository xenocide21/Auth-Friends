import axios from 'axios'
import axiosWithAuth from '../helpers/AxiosWithAuth'

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';
export const ADD_NEW_FRIEND = 'ADD_NEW_FRIEND';
export const ADD_NEW_FRIEND_SUCCESS = 'ADD_NEW_FRIEND_SUCCESS';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const LOGIN = 'LOGIN';

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
        })
        .catch(err =>
            dispatch({
                type: FETCH_FRIENDS_FAILURE,
                payload: err.response
            })
        );
};

export const login = (username, password) => dispatch => {
    const credentials = { username, password };
    axios
        .post('http://localhost:5000/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
        })
        .catch(err => console.log(`Could not login - ${err.error}`));
};

export const addFriend = friend => dispatch => {
    dispatch({ type: ADD_NEW_FRIEND });
    axiosWithAuth()
        .post('http://localhost:5000/api/friends', friend)
        .then(res => dispatch({ type: ADD_NEW_FRIEND_SUCCESS, payload: res.data }))
        .catch(err => console.log(`Could not add friend: ${err.message}`));
};

export const deleteFriend = id => dispatch => {
    dispatch({ type: DELETE_FRIEND });
    axiosWithAuth()
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data }))
        .catch(err => {
            console.log(`Could not delete friend: ${err.message}`);
        });
};