// ContactHeader.jsx
import React from "react";
import "./ContactHeader.css";

function ContactHeader() {
    return (
        <header className="contact-header">
            <div className="header-top">
                <h2>Chats</h2>
            </div>
            <div className="header-search">
                <input 
                    type="text" 
                    placeholder="Buscar o empezar un chat" 
                />
            </div>
        </header>
    );
}

export default ContactHeader;
