import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const [ name, setName ] = useState('');
  const [ contact, setContact ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');
  const [ appointmentInfo, setAppointmentInfo ] = useState(null);
  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          name={name}
          contact={contact}
          date={date}
          time={time}
          setName={setName}
          setContact={setContact}
          setDate={setDate}
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