import { createContext, useEffect, useState } from "react";
import { getAllContacts } from "../services/contactService";

export const ContactListContext = createContext({
    contactList: [],
    isContactListLoading: false
});

const ContactListContextProvider = (props) => {
    const [contactList, setContactList] = useState([]);
    const [isContactListLoading, setIsContactListLoading] = useState(false);

    useEffect(() => {
        setIsContactListLoading(true);
        setTimeout(() => {
            const response = getAllContacts();
            setContactList(response);
            setIsContactListLoading(false);
        },
        1500);
    }, []);

    return (
        <ContactListContext.Provider value={{ contactList, isContactListLoading }}>
            {props.children}
        </ContactListContext.Provider>
    );
};

export default ContactListContextProvider;
