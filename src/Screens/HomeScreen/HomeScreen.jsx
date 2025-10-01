import React from 'react'
import ContactList from '../../Components/ContactList/ContactList'
import ContactHeader from '../../Components/ContactHeader/ContactHeader'
import './HomeScreen.css'

const HomeScreen = () => {
    return (
    <div className="home-container">
        
        <div className='left-container'>
            <div className='contact-header'>
                <ContactHeader/>
            </div>
            <div className='contact-list'>
                <ContactList/>
            </div>
        </div>

        <hr />

        <div className="chat-placeholder">
            <span>Aún no has seleccionado ningún contacto</span>
        </div>
    </div>
    )
}

export default HomeScreen
