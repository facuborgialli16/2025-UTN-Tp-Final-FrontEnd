import React, { useContext } from 'react'
import { getAllContacts } from '../../services/contactService'
import { Link } from 'react-router'
import { ContactListContext } from '../../Context/ContactListContext'
import './ContactList.css'



const ContactList = () => {
    //useContext es un hook nativo de react que me permite consumir contextos
    const { contactList, isContactListLoading } = useContext(ContactListContext)

    return (
        <div>
            {
                isContactListLoading
                    ? <span className='contact-charge'>cargando contactos...</span>
                    : contactList.map(
                        (contact) => {
                            return <ContactItem
                                contact={contact}
                                key={contact.id}
                            />
                        }
                    )
            }

        </div>
    )
}

const ContactItem = ({ contact }) => {
    return (
        <Link to={'/contacto/' + contact.id} className="contact-item">
            <img
            src={contact.profile_img} 
            alt={contact.name} 
            />
            <div className="contact-info">
                <h2 className="contact-name">{contact.name}</h2>
            </div>
        </Link>
    )
}

export default ContactList
