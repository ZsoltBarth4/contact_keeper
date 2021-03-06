import React, {Fragment, useContext, useEffect} from 'react'
import ContactContext from "../../context/contact/ContactContext"
import ContactItem from './ContactItem';
import Spinner from "../layout/Spinner"


const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const {getContacts, contacts, filtered, loading} =contactContext;

    useEffect(() => {
        getContacts();
        //eslint.disable-next-line
    },[]);

    if(contacts !== null && contacts.length === 0 &&!loading){
        return <h4>Please add a contact</h4>
    }

    return (
        <Fragment>
          {contacts !== null && !loading ? (
            <div>
              {filtered !== null
                ? filtered.map((contact) => (
                    <ContactItem key={contact._id} contact={contact} />
                  ))
                : contacts.map((contact) => (
                    <ContactItem key={contact._id} contact={contact} />
                  ))}
            </div>
          ) : (
            <Spinner />
          )}
        </Fragment>
      );
}

export default Contacts
