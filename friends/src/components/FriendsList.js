import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import { fetchFriends, deleteFriends } from "../actions/actions"
import {Link} from "react-router-dom";

const FriendsList = (props) => {
    console.log('FriendsList', props)
    const state = useSelector(state => state);
    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(fetchFriends())

    }, [dispatch])

    return (
        state.friends && state.friends.length ? state.friends.map(friends => {

            return(
                <div className="image-container">
                    <h2>{friends.name}</h2>
                    <p>{friends.age}</p>
                    <p>{friends.email}</p>
                    <div className='pCardBtnContainer'>
                        <Link to={`/edit-friends/${friends.id}`}>Edit Friend</Link>
                        <button className="delete" onClick={()=>{dispatch(deleteFriends(friends.id))}}>Delete Friend</button>
                    </div>
                </div>
            )}
        ) : null
    )
}

export default FriendsList;