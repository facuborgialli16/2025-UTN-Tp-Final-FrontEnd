import React from 'react'
import ContactList from '../../Components/ContactList/ContactList'
import ContactHeader from '../../Components/ContactHeader/ContactHeader'
import Navbar from '../../Components/NavBar/NavBar'
import './HomeScreen.css'

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
                <span>Aún no has seleccionado ningún contacto</span>
            </div>
        </div>
    )
}

export default HomeScreen
