import React from 'react';
import { FriendsList } from './FriendsList';

export default class FriendsListContainer extends React.Component {
    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        if (this.props.isFetching) {
            return (
                <div>
                    <div className="lds-default">
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            )
        }

        return (
            <div>
                <h1>Friends</h1>
                <FriendsList
                    friends={this.props.friends}
                    deleteFriend={this.props.deleteFriend}
                />
            </div>
        );
    }
}