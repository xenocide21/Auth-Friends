import React from 'react';
import Friend from './Friends';
import Nav from './Navigation';

export const FriendsList = (props) => {
    return(
        <div>
            <Nav />
            {props.friends.map(friend => (
                <Friend {...friend} key={friend.id} deleteFriend={props.deleteFriend} />
            ))}
        </div>
    )
}