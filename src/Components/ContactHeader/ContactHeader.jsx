// ContactHeader.jsx
import React from "react";
import "./ContactHeader.css";
import ICONS from "../../Constants/Icons";
function ContactHeader() {
    return (
        <header className="contact-header">
            <div className="header-top">
                <div className="title">
                    <h2>Chats</h2>
                </div>
                <div className="buttons-header">
                    <button className="button-NewChat"><ICONS.NewChat/></button>
                    <button className="button-Options"><ICONS.Options/></button>
                </div>
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
