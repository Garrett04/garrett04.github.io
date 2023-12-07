import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const [ name, setName ] = useState('');
  const [ contact, setContact ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');
  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add contact info
    props.addAppointment(name, contact, date, time);

    // Clear form
    setName('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={props.contacts}
          name={name}
          setTitle={setName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit} 
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList dataList={props.appointments} />
      </section>
    </div>
  );
};