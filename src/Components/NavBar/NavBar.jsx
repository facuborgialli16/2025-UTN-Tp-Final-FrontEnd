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
                <img src="https://us.123rf.com/450wm/jemastock/jemastock1704/jemastock170402177/75461905-cabeza-cara-hombre-personaje-masculino-vector-ilustraci%C3%B3n-eps-10.jpg?ver=6" alt="avatar" />
            </div>
        </aside>
    );
};

export default NavBar;
