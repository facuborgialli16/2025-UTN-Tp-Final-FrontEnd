import { createContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { getContactById } from "../services/contactService";

export const ContactDetailContext = createContext(
    {
        isContactDetailLoading: false,
        contactDetailed: null,
        onCreateNewMessage: (new_message) => {}
    }
);

const ContactDetailContextProvider = (props) => {
    const [isContactDetailLoading, setIsContactDetailLoading] = useState(false)
    const [contactDetailed, setContactDetailed] = useState(null)

    const {id_contacto} = useParams()

    function loadContactById (contact_id){
        setIsContactDetailLoading(true)
        
        setTimeout(
            () => {
                const contact = getContactById(contact_id)
                setContactDetailed(contact)
                setIsContactDetailLoading(false)
            },
            1500
        )
    }

    useEffect(
        () => {
            loadContactById(id_contacto)
        },
        [id_contacto]
    )

    const onCreateNewMessage = (new_message) => {
        const new_message_object = {
        id: contactDetailed.messages.length + 1,
        author: 'YO',
        message: new_message,
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        sent: true      // porque lo estás enviando vos
        }
        const messages_cloned = [...contactDetailed.messages]
        messages_cloned.push(new_message_object)
        setContactDetailed({...contactDetailed, messages: messages_cloned})
    }



    return (
        <ContactDetailContext.Provider
            value={
                {
                    isContactDetailLoading: isContactDetailLoading,
                    contactDetailed: contactDetailed,
                    onCreateNewMessage: onCreateNewMessage
                }
            }
        >
            {/* Mostrar el contenido de la ruta */}
            <Outlet/>
        </ContactDetailContext.Provider>
    )
}


export default ContactDetailContextProvider