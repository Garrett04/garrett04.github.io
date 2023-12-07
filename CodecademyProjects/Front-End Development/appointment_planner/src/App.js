import React, { useCallback, useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [ contactsList, setContactsList ] = useState([]);
  const  [ appointmentsList, setAppointmentsList ] = useState([]);

  const addContact = (name, phoneNum, email) => { 
    const newContact = {
      name: name,
      phoneNum: phoneNum,
      email: email
    }

    setContactsList([
      ...contactsList,
      newContact
    ]);
  }

  const addAppointment = (name, contact, date, time) => {
    const newAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time
    }

    setAppointmentsList([
      ...appointmentsList,
      newAppointment
    ]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} 
        element={ 
          <ContactsPage 
            contacts={contactsList} 
            addContact={addContact} 
          />
        }/>
      <Route path={ROUTES.APPOINTMENTS} 
        element={ 
          <AppointmentsPage 
            appointments={appointmentsList} 
            contacts={contactsList}
            addAppointment={addAppointment} 
          />
        }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
