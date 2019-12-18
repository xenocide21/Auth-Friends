import {axiosWithAuth} from "../helpers/AxiosWithAuth"
// import unsplash from "../helpers/unsplash";
// import axios from "axios";

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";
export const POST_FRIENDS_START = "POST_FRIENDS_START";
export const POST_FRIENDS_SUCCESS = "POST_FRIENDS_SUCCESS";
export const POST_FRIENDS_FAILURE = "POST_FRIENDS_FAILURE";
export const DELETE_FRIENDS_START = "DELETE_FRIENDS_START";
export const DELETE_FRIENDS_SUCCESS = "DELETE_FRIENDS_SUCCESS";
export const DELETE_FRIENDS_FAILURE = "DELETE_FRIENDS_FAILURE";
export const EDIT_FRIENDS_START = "EDIT_FRIENDS_START";
export const EDIT_FRIENDS_SUCCESS = "EDIT_FRIENDS_SUCCESS";
export const EDIT_FRIENDS_FAILURE = "EDIT_FRIENDS_FAILURE";


export const fetchFriends=() =>{
    return dispatch => {
        dispatch({type: FETCH_FRIENDS_START});
        axiosWithAuth
            .get("/api/photos/1")
            .then(response => {
                console.log("response", response)
                dispatch({type: FETCH_FRIENDS_SUCCESS, payload: response.data});
            })
            .catch(error => {
                dispatch({type: FETCH_FRIENDS_FAILURE, payload: error});
            });
    };
}

export const postFriends = ({title, url}) => {
    return dispatch => {
        dispatch({type: POST_FRIENDS_START});
        axiosWithAuth
            .post("/api/photos/1", {
                photo_title: title,
                photo_url: url
            })
            .then(response => {
                dispatch({type: POST_FRIENDS_SUCCESS, payload: response.data});
                axiosWithAuth
                    .get("/api/photos/1")
                    .then(response => {
                        dispatch({type: FETCH_FRIENDS_SUCCESS, payload: response.data});
                    })
                    .catch(error => {
                        dispatch({type: FETCH_FRIENDS_FAILURE, payload: error});
                    });
            })
            .catch(error => {
                dispatch({type: POST_FRIENDS_FAILURE, payload: error});
            });
    };
}

export const editFriends = (id, data) => {
    return dispatch => {
        dispatch({type: EDIT_FRIENDS_START});
        axiosWithAuth
            .put(`/photos/${id}`, data)
            // ` /api/photos/1/${id}`, data)
            .then(response => {
                dispatch({type: EDIT_FRIENDS_SUCCESS, payload: response.data});
                dispatch(fetchFriends());
            })
            .catch(error => {
                dispatch({type: EDIT_FRIENDS_FAILURE, payload: error});
            });
    };
}

export const deleteFriends = (id) => {
    return dispatch => {
        dispatch({type: DELETE_FRIENDS_START});
        axiosWithAuth
            .delete(`/api/photos/1/${id}`)
            .then(response => {
                dispatch({type: DELETE_FRIENDS_SUCCESS, payload: response.data});
                dispatch(fetchFriends());
            })
            .catch(error => {
                dispatch({type: DELETE_FRIENDS_FAILURE, payload: error});
            });
    };
}

