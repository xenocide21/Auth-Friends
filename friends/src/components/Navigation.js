import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav'>
            <NavLink exact to="/" activeClassName="activeNavLink">
                Friends List
            </NavLink>
            <NavLink exact to="new_friend" activeClassName="activeNavLink">
                Add Friend
            </NavLink>
        </div>
    );
};

export default Nav;