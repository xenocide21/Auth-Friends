
import {FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE, POST_FRIENDS_START, POST_FRIENDS_SUCCESS, POST_FRIENDS_FAILURE, DELETE_FRIENDS_START, DELETE_FRIENDS_SUCCESS, DELETE_FRIENDS_FAILURE, EDIT_FRIENDS_START, EDIT_FRIENDS_SUCCESS, EDIT_FRIENDS_FAILURE} from "../actions/actions"

export const initialState = {
    friends: [],
    isLoading: false,
    error: null,
    isDeleting: false,
    user: [{
        username: "",
        password: ""
    }]

}
export function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_FRIENDS_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pics: action.payload
            }
        case FETCH_FRIENDS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_FRIENDS_START:
            return {
                ...state,
                isLoading: true
            }
        case POST_FRIENDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pics: [...state.pics, action.payload]
            }
        case POST_FRIENDS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case EDIT_FRIENDS_START:
            return {
                ...state,
                isLoading: true,
                pics: [...state.pics, action.payload]
            }
        case EDIT_FRIENDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pics: action.payload
            }
        case EDIT_FRIENDS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case DELETE_FRIENDS_START:
            return {
                ...state,
                isDeleting: true
            }
        case DELETE_FRIENDS_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                pics: action.payload
            }
        case DELETE_FRIENDS_FAILURE:
            return {
                ...state,
                isDeleting: false,
                error: action.payload
            }
        default:
            return state

    }
}

