    import React, { useContext, useEffect, useState } from 'react'
    import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
    import MessagesList from '../../Components/MessagesList/MessagesList'
    import ContactHeader from '../../Components/ContactHeader/ContactHeader'
    import ContactList from '../../Components/ContactList/ContactList'
    import { ContactDetailContext } from '../../Context/ContactDetailContext'
    import { useParams } from 'react-router'
    import { getContactById } from '../../services/contactService'

    import'./MessageScreen.css'



    function MessageScreen() {


        const {isContactDetailLoading, contactDetailed, onCreateNewMessage} = useContext(ContactDetailContext)




        return (
            <div className="message-screen">
            <div className="message-screen__contact-list-container  ">
                <ContactHeader/>
                <ContactList/>
            </div>
            <hr />
            <div className='message-screen__messages-container'>
                    {
                        isContactDetailLoading 
                        ? <span className="loading-container">cargando...</span>
                        : (
                            contactDetailed 
                            ? <MessagesList 
                                messages={contactDetailed.messages} 
                            />
                            : <span>contacto no encontrado</span>
                        )
                    }
                    
                    <div className='messages-form-container'>
                        <NewMessageForm
                            onCreateNewMessage={onCreateNewMessage}
                        />
                    </div>
            </div>
            </div>
        )
        }

    export default MessageScreen
