import React, { useCallback, useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [ contactsList, setContactsList ] = useState([]);
  const  [ appointmentsList, setAppointmentsList ] = useState([]);
  /*
  Define state variables for 
  contacts and appointments 
  */

  const addContact = useCallback((name, phoneNum, email) => {
    const newContact = {
      name: name,
      phoneNum: phoneNum,
      email: email
    }

    setContactsList((prevContact) => prevContact + newContact);
  })

  const addAppointment = useCallback((name, contact, date, time) => {
    const newAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time
    }

    setAppointmentsList((prevAppointment) => prevAppointment + newAppointment);
  })
  /*
  Implement functions to add data to
  contacts and appointments
  */

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} 
        element={ 
          <ContactsPage 
            contacts={contactsList} 
            addContact={addContact} 
          /> /* Add props to ContactsPage */ 
        }/>
      <Route path={ROUTES.APPOINTMENTS} 
        element={ 
          <AppointmentsPage 
            appointments={appointmentsList} 
            addAppointment={addAppointment} 
          /> /* Add props to AppointmentsPage */ 
        }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
