import React from 'react';
import './NavBar.css';
import ICONS from '../../Constants/Icons';

const NavBar = () => {
    return (
        <aside className="navbar">
            {/* Íconos superiores */}
            <div className="nav-icons">
                <button className="nav-btn">
                    <ICONS.Chats />
                </button>
                <button className="nav-btn">
                    <ICONS.States />
                </button>
                <button className="nav-btn">
                    <ICONS.Channels />
                </button>
                <button className="nav-btn">
                    <ICONS.Users />
                </button>
            </div>

            {/* Avatar abajo */}
            <div className="nav-avatar">
                <img src="https://i.pravatar.cc/40" alt="avatar" />
            </div>
        </aside>
    );
};

export default NavBar;
