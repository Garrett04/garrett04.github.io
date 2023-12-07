import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [ contactName, setContactName ] = useState('');
  const [ contactPhone, setContactPhone ] = useState('');
  const [ contactEmail, setContactEmail ] = useState('');
  const [ duplicateCheck, setDuplicateCheck ] = useState(false);
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!duplicateCheck) {
    props.addContact(contactName, contactPhone, contactEmail);

    // Clear Data
    setContactName('');
    setContactPhone('');
    setContactEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const isDuplicate = () => {
      const found = props.contacts.find((contact) => contact.name === contactName);
      if (found !== undefined) {
        return true;
      }
      return false;
    }

    if (isDuplicate()) {
      setDuplicateCheck(true);
    } else {
      setDuplicateCheck(false);
    }
  }, [ contactName, props.contacts, duplicateCheck ]);

  return (
    <div>
      <section>
        <h2>
          Add Contact
          {duplicateCheck ? " - Name Already Exists" : ""}
        </h2> 
        <ContactForm 
          name={contactName} 
          setName={setContactName}
          phone={contactPhone}
          setPhone={setContactPhone} 
          email={contactEmail}
          setEmail={setContactEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList dataList={props.contacts} />
      </section>
    </div>
  );
};