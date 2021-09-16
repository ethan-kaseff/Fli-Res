import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom'
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <div className='bars' onClick={openMenu}>
                {/* <i className="fas fa-user-circle" />
                <i className="far fa-user"></i> */}
                {/* <h3 className='profile-button'>{user.username}</h3> */}
                <i class="fas fa-bars fa-lg"></i>
            </div>
            {showMenu && (
                <div className="profile-dropdown">
                    <div className='username'>{user.username}</div>
                    <div>
                        <NavLink to='/profile'>
                            <button>Profile</button>
                        </NavLink>
                    </div>
                    <div>
                        <button onClick={logout}>Log Out</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProfileButton;