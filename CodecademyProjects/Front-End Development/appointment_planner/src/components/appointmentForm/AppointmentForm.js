import React, { useMemo } from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  setTitle,
  name,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          value={name} 
          placeholder="Enter Appointment Title"
          name="name" 
          type="text" 
          onChange={({target}) => setTitle(target.value)} 
          required
        />
        <ContactPicker 
          contacts={contactNames}
          value={contact}
          name="contact"
          onChange={({target}) => setContact(target.value)} 
        />
        <input 
          value={date} 
          type="date" 
          name="date"
          min={getTodayString()} 
          onChange={({target}) => setDate(target.value)} 
          required
        />
        <input 
          value={time} 
          type="time" 
          name="time"
          onChange={({target}) => setTime(target.value)} 
          required
        />
        <input type="submit" value="Add Appointment" />
      </form>
    </>
  );
};
