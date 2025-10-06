import React from 'react'
import ContactList from '../../Components/ContactList/ContactList'
import ContactHeader from '../../Components/ContactHeader/ContactHeader'
import Navbar from '../../Components/NavBar/NavBar'
import './HomeScreen.css'
import ICONS from '../../Constants/Icons'

const HomeScreen = () => {
    return (
        <div className="home-container">
            <div className="navbar-container">
                <Navbar />
            </div>

            <div className="contact-container">
                <ContactHeader />
                <ContactList />
            </div>

            <div className="chat-placeholder">
                <div className='chat-placeholder__icon'><ICONS.Whatsapp/></div>
                <span className='chat-placeholder__title'>WhatsApp para Windows</span>
                <span>Envía y recibe mensajes sin mantener tu teléfono conenctado</span>
                <span>Usa WhatsApp en hasta 4 dispositivos vinculados y 1 teléfono a la vez </span>
            </div>
        </div>
    )
}

export default HomeScreen
