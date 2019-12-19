import {
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE,
    DELETE_FRIEND_SUCCESS,
    ADD_NEW_FRIEND_SUCCESS
} from '../actions/actions';

const initialState = {
    friends: [],
    isFetching: false,
    error:''
}

export const rootReducer = (state= initialState , action) => {
    switch (action.type) {
        case FETCH_FRIENDS_START:
            return {
                ...state,
                isFetching: true,
                error: '',
            };

        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                friends: action.payload
            };

        case FETCH_FRIENDS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };

        case DELETE_FRIEND_SUCCESS:
            return {
                ...state,
                friends: action.payload
            }

        case ADD_NEW_FRIEND_SUCCESS:
            return {
                ...state,
                friends: action.payload
            }

        default:
            return  state ;
    }
}