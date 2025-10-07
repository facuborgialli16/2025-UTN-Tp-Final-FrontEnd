// src/Components/ChatHeaderMessages/ChatHeaderMessages.jsx
import React, { useContext } from 'react';
import { ContactDetailContext } from '../../Context/ContactDetailContext';
import './ChatHeaderMessages.css';
import ICONS from '../../Constants/Icons';
import { useNavigate } from 'react-router';

function ChatHeaderMessages() {
    const { contactDetailed, isContactDetailLoading } = useContext(ContactDetailContext);
    const navigate = useNavigate(); 

    const handleGoBack = () => {
            navigate(-1); 
        };

    if (isContactDetailLoading) {
        return (
            <div className="chat-header-messages">
                <span>Cargando contacto...</span>
            </div>
        );
    }

    if (!contactDetailed) {
        return (
            <div className="chat-header-messages">
                <span>Contacto no encontrado</span>
            </div>
        );
    }
    
    return (
        <div className="chat-header-messages">
            <div className='chat-header-messages_img-container'>
                <button className='chat-header-message__back-button'onClick={handleGoBack}>
                    <ICONS.Back />
                </button>   
                <img
                    src={contactDetailed.profile_img}
                    alt={contactDetailed.name}
                    className="chat-header-messages__img"
                />
                <div className="chat-header-messages__info">
                    <h2>{contactDetailed.name}</h2>
                    <span>{contactDetailed.is_connected ? 'En línea' : 'Desconectado'}</span>
                </div>
            </div>
            <div className='header-buttons'>
                <button className='button-videcall'><ICONS.VideoCall/></button>
                <button className='button-serch'><ICONS.Serch/></button>
                <button className='button-options'><ICONS.Options/></button>
            </div>
        </div>
    );
}

export default ChatHeaderMessages;
