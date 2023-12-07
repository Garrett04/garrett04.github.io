import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={name} type="text" onChange={({target}) => setName(target.value)} required/>
        <input value={date} type="date" onChange={({target}) => setDate(target.value)} min={getTodayString()} required/>
        <input value={time} type="time" onChange={({target}) => setTime(target.value)} required/>
        <ContactPicker 
          contacts={contacts}
          onChange={({target}) => setContact(target.value)} 
        />
        <input type="submit" />
      </form>
    </>
  );
};
