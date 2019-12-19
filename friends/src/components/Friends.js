import React from 'react'

export default function Friend(props) {
    const onDeleteFriend = () => {
        props.deleteFriend(props.id)
    }

    return (
        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.email}</div>
            <button
                onClick={() => {
                    onDeleteFriend();
                }}>x</button>
        </div>
    );
}