import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [ contactName, setContactName ] = useState('');
  const [ contactPhone, setContactPhone ] = useState('');
  const [ contactEmail, setContactEmail ] = useState('');
  const [ duplicateCheck, setDuplicateCheck ] = useState(null);
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
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={contactName} 
          phone={contactPhone} 
          email={contactEmail}
          setName={setContactName}
          setPhone={setContactPhone}
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
