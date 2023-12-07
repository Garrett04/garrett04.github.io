import React from "react";

export const ContactPicker = (props) => {
  return (
    <>
      <select onChange={props.onChange} value={props.value} name={props.name}>
        <option value="">No Contact Selected</option>
        {props.contacts.map(contact => (
          <option value={contact} key={contact}>{contact}</option>
        ))}
      </select>
    </>
  );
};
